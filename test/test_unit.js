const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const {ethers} = require("hardhat");

describe("$GGT", () => {

    const totalSupply = ethers.utils.formatEther('10000000000000000000000000000') // inWei to Ether

    async function deploymentFixture() {
        const accounts = await ethers.getSigners();
        const accountDeployer = accounts[0];
        const accountUser = accounts[1];

        // contracts instances
        let c = {
            GGT: null
        }
        // Deploying contracts
        const GGT = await ethers.getContractFactory("GameGoldToken")
        c.GGT = await GGT.deploy();
        await c.GGT.deployed();

        return {c, accountDeployer, accountUser}
    }

    it("Unit OK: Initial Supply is correct and sender HODL it", async function() {
        const {c, accountDeployer} = await loadFixture(deploymentFixture);

        expect(ethers.utils.formatEther(await c.GGT.totalSupply())).to.equal(totalSupply, 'Initial totalSupply exceeds the pre-minting one.');
        expect(ethers.utils.formatEther(await c.GGT.balanceOf(accountDeployer.address))).to.equal(totalSupply, 'Deployer account doesn\'t HODL the pre-minting totalSupply.');
    });

    it("Unit OK: Transfer $GGT from Deployer to an User address", async function() {
        const {c, accountDeployer, accountUser} = await loadFixture(deploymentFixture);
        const transferAmount = ethers.utils.parseEther('100')

        // Initial balances
        const deployerInitialBalance = ethers.utils.formatEther(await c.GGT.balanceOf(accountDeployer.address))
        const userInitialBalance = ethers.utils.formatEther(await c.GGT.balanceOf(accountUser.address))
        // Expect that deployer HODL the totalSupply and User nothing
        expect(deployerInitialBalance).to.equal(totalSupply, 'Deployer account doesn\'t HODL the pre-minting totalSupply.');
        expect(userInitialBalance).to.equal('0.0', 'User account shouldn\'t HODL nothing.');
        // Deployer transfers 100 $GGT to User
        await c.GGT.connect(accountDeployer).transfer(accountUser.address, transferAmount, {
            from: accountDeployer.address
        })
        // After balances
        const deployerAfterBalance = ethers.utils.formatEther(await c.GGT.balanceOf(accountDeployer.address))
        const userAfterBalance = ethers.utils.formatEther(await c.GGT.balanceOf(accountUser.address))
        // Expect that deployer HODL the totalSupply less transferAmount and User transferAmount
        expect(deployerAfterBalance).to.equal('9999999900.0', 'Deployer account should HODL the pre-minting totalSupply less the transferAmount.'); // deployerInitialBalance - transferAmount
        expect(userAfterBalance).to.equal('100.0', 'User account should HODL the transferAmount.'); // userInitialBalance + transferAmount
    });
});
