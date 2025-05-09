import { useState, useEffect } from "react";
import "./App.css";

import web3 from "./web3";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const managerAddress = await lottery.methods.manager().call();
        setManager(managerAddress);

        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error("Error initializing:", error);
      }
    };

    init();
  }, []);

  return (
    <>
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}</p>
        <p>Current account is {accounts}</p>
      </div>
    </>
  );
}

export default App;
