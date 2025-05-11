import { useState, useEffect } from "react";
import "./App.css";

import web3 from "./web3";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState("");

  const handleValueChange = (e) => {
    const input = e.target.value;
    // 只允許數字和小數點
    if (/^\d*\.?\d*$/.test(input) || input === "") {
      setValue(input);
      setInputError("");
    } else {
      setInputError("Please enter a valid number");
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (!value || parseFloat(value) <= 0) {
      setInputError("Please enter a valid amount");
      return;
    }

    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting on transaction success....");
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      setMessage("You have been entered!");
      setValue("");
    } catch (error) {
      setMessage(`Transaction failed. Please try again. \n ${error}`);
    }
  }

  async function pickWinner() {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success.....");

    try {
      await lottery.methods.pickWinner().send({
        from: accounts[0],
      });
      setMessage("A winner has been picked");
    } catch (error) {
      setMessage(`Failed to pick winner. Please try again. \n ${error}`);
    }
  }
  const startGame = async () => {
    try {
      const managerAddress = await lottery.methods.manager().call();
      setManager(managerAddress);

      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      const players = await lottery.methods.getPlayers().call();
      setPlayers(players);

      const balance = await web3.eth.getBalance(lottery.options.address);
      setBalance(balance);
    } catch (error) {
      console.error("Error initializing:", error);
    }
  };

  useEffect(() => {
    startGame();
    // init();
  }, []);

  return (
    <div className="container">
      <div className="lottery-card">
        <h2>🎲 ETH Lottery</h2>
        {accounts.length === 0 && (
          <div>
            <button onClick={startGame} className="start-button">
              Connect web3!
            </button>
          </div>
        )}
        {accounts.length > 0 && (
          <div>
            <div className="info-section">
              <p className="manager-info">
                Manager: <span className="highlight">{manager}</span>
              </p>
              <p className="stats">
                Players: <span className="highlight">{players.length}</span> |
                Prize:{" "}
                <span className="highlight">
                  {web3.utils.fromWei(balance, "ether")} ETH
                </span>
              </p>
              <p className="account-info">
                Your Account: <span className="highlight">{accounts[0]}</span>
              </p>
            </div>
            <div className="action-section">
              <form onSubmit={onSubmit} className="enter-form">
                <h4>Want to try your luck?</h4>
                <div className="input-group">
                  <label>Amount of ETH to enter</label>
                  <input
                    type="text"
                    value={value}
                    onChange={handleValueChange}
                    placeholder="Enter amount in ETH"
                    className={inputError ? "error" : ""}
                  />
                  {inputError && (
                    <span className="error-message">{inputError}</span>
                  )}
                </div>
                <button type="submit" className="enter-button">
                  Enter Lottery
                </button>
              </form>

              <div className="winner-section">
                <h4>Ready to pick a winner?</h4>
                <button onClick={pickWinner} className="winner-button">
                  Pick a Winner!
                </button>
              </div>
            </div>

            {message && <div className="message">{message}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
