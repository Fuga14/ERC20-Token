const { network } = require('hardhat');
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require('../helper-hardhat-config');
const { verify } = require('../helper-function');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  //args for constructor of our contract
  const args = [INITIAL_SUPPLY];
  const ourToken = await deploy('OurToken', {
    from: deployer,
    log: true,
    args: args,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`Our contract is deployed at address: ${ourToken.address}`);

  if (
    !developmentChains.includes(network.name) &&
    proccess.env.ETHERSCAN_API_KEY
  ) {
    await verify(ourToken.address, [INITIAL_SUPPLY]);
  }
};

module.exports.tags = ['all', 'token'];
