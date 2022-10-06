# Public Smart Contract

The $GGT Token Smart Contract will be deployed on the Ethereum Network.
This GitHub repository provides a centralized location for interested parties to view the Smart Contract.

## Smart Contract Audit
$GGT Smart Contract has currently being audited by Grant Thornton.
Grant Thornton is a professional services firm that provides audit, tax, legal, and financial advisory services. It is one of the leading professional service organizations worldwide, with 58,000 people in over 140 countries.
The final audit has already been released with a score of 9.9. It can be accessed now [here](https://drive.google.com/file/d/1Uxy_AiD-tbIuzwQhOQbulEZ7h6OHzBod/view?usp=sharing) and will be viewable on https://etherscan.io/ as soon as the token is minted on the mainnet.
## Smart contracts addresses

### Ethereum Mainnet
[Mainnet]
TBD

### Ethereum Testnet
[Goerli]
https://goerli.etherscan.io/address/0xdE8eCC061f2940D1Ccd32DbE5cEA64EC0E1Fc878

<hr/>

## Project setup
Run installations in both root and in the frontend folder:
```bash
npm install
```

## Create .env file
Set the environment you want to use and choose the related compiling method described as below
```bash
cp .env.example .env
```

## Tests

### Solidity/Hardhat
```bash
npx hardhat test
```

## Deployment to HardHat (best for testing)
check hardhat.config.js to have "hardhat" as default
```bash
npx hardhat run scripts/deploy.js
```

## Deployment to a remote Blockchain
```bash
npx hardhat run scripts/deploy.js --network goerli
```

## Verify on Etherscan (if remote Blockchain)
```bash
npx hardhat --network mainnet etherscan-verify --api-key <apikey>
```
