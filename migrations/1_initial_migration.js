const Migrations = artifacts.require("Migrations");
const G4ALToken = artifacts.require("G4ALToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(G4ALToken, '0x4Bc0db5826764Eb4aE62F7Fd24DdeDdb1331c718');
};
