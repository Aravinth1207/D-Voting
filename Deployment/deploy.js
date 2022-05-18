// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const ganache = require('ganache-cli');
const { interface, bytecode } = require("./compile");

const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:7545"
);
const web3 = new Web3(provider);
var ContractAddress;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '3000000' });
  console.log(interface);
  console.log("Contract deployed to", result.options.address);
  ContractAddress = result.options.address;

}


deploy();
console.log(ContractAddress)
module.exports = {
  ContractAddress
};
