import Web3 from "web3";

try {
  window.ethereum.request({ method: "eth_requestAccounts" });
} catch (error) {
  console.log(error);
}

const web3 = new Web3(window.ethereum);

export default web3;
