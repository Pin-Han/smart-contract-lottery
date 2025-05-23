// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf-8");

module.exports = solc.compile(source, 1).contracts[":Lottery"];
console.dir(solc.compile(source, 1), { depth: null });
