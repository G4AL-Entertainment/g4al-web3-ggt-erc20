# Public Smart Contract

The $GGT contract will be uploaded on Ethereum. This GitHub repository acts as a centralized repository for interested parties to take a look at the smart contract.

## Smart contracts auditing
The smart code for the $GGT is currently being Audited by Grant Thornton.

Grant Thornton is a professional services firm providing audit, consultancy, technology and innovation, tax, legal and financial advisory services. It is one of the leading professional service organizations worldwide with 58,000 people in over 140 countries.
Final Audit has been already released with a score of 9.9. It can be accessed now [here](https://drive.google.com/file/d/1Uxy_AiD-tbIuzwQhOQbulEZ7h6OHzBod/view?usp=sharing) and will be viewable in https://etherscan.io/ as soon as the token is minted on the mainnet.

## Smart contracts addresses

### Ethereum Testnet URL (Ropsten)
[Ropsten] https://ropsten.etherscan.io/address/0xdafc702D95fbD5060bd247dEF8176F6dEE63B752

### Ethereum Mainnet URL
[Mainnet] TBD


## Instructions to replicate in local environment

#### Dependencies
- [node.js](https://nodejs.org/en/download/)
- [ganache](https://trufflesuite.com/ganache/)
- npm 
    - ```npm install -g npm```


#### Steps to test (Windows)
- Make sure to have all dependencies installed in your computer
- Clone github repository in local
- Launch Powershell and locate the local path
- Compile the solution with truffle
    - ```truffle compile```
- Migrate the solution to the development environment
    - ```truffle migrate --network development```
- Execute unit tests
    - ```truffle test```

    > **⚠️ Warning**
        > The test labeled as 'transfering GGT tokens' will fail unless the test address set in [*1_initial_migration.js*](migrations/1_initial_migration.js) file is modified with a valid test address.

#### Full steps to create project
- Initialize npm
    - ```npm init -y```
- Install the Truffle suite
    - ```npm install -g truffle```
- Initialize Truffle
    - ```truffle init```
- Install node_module dependencies
    - ```npm install @openzeppelin/contracts```
    - ```npm install @truffle/hdwallet-provider```
    - ```npm install -D truffle-plugin-verify```

- Compile the solution with truffle
    - ```truffle compile```
- Migrate the solution to the development/ropsten/mainnet environment
    - ```truffle migrate --network development/ropsten/mainnet```
- Execute unit tests
    - ```truffle test```
    > **⚠️ Warning**
        > The test labeled as 'transfering GGT tokens' will fail unless the test address set in 1_initial_migration.js file is modified with a test account.
- Verify the Source code in ropsten/mainnet environments
    - ```truffle run verify GGToken --network ropsten```