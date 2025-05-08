const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience

const { interface, bytecode } = require("./compile");

// deploy code will go here
const provider = new HDWalletProvider(
  "host hat street champion nothing rabbit box swap picture spirit chapter truth",
  "https://sepolia.infura.io/v3/06b0bbdc307c4ac5956f25db612af49a"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from accounts", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deploy to ", result.options.address);
  provider.engine.stop();
};

deploy();
