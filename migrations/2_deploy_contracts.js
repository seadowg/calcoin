var CalCoin = artifacts.require("./CalCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(CalCoin);
};
