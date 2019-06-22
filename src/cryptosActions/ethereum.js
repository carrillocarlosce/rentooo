const Web3 = require("web3");

const web3 = new Web3(
  new Web3.providers.HttpProvider("https://mainnet.infura.io/")
);

export function createAccount() {
  return web3.eth.accounts.create(web3.utils.randomHex(32));
}
