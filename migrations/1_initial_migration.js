const Migrations = artifacts.require("Migrations");
const GGT = artifacts.require("GGToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(GGT, '0xAc756274DF0800e5cC51A33a112E62e2b6716fF0');
};
