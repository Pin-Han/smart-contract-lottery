import { account as address, abi } from "../../secret-frontend";
import web3 from "./web3";

export default new web3.eth.Contract(abi, address);
