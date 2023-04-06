const { network, ethers } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deplyer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  //args for constructor of our contract
  const args = [];
};
