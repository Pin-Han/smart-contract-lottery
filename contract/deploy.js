const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience

const { interface, bytecode } = require("./compile");

const secret = require("../secret");
// deploy code will go here
const provider = new HDWalletProvider(secret.key, secret.endpoint);

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
