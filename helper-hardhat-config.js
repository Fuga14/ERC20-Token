const { ethers } = require('hardhat');

const networkConfig = {
  11155111: {
    name: 'sepolia',
    ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
  },
  31337: {
    name: 'localhost',
  },
};
const INITIAL_SUPPLY = '1000000000000000000000000';
const developmentChains = ['localhost', 'hardhat'];

module.exports = {
  INITIAL_SUPPLY,
  networkConfig,
  developmentChains,
};