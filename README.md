# blockchain-developer-bootcamp-final-project

## Overview

Due to the rise in popularity of NFTs, there has been a huge rise in artists that want to create NFTs and launch collections. However, a lot of these artists don't have the technical background needed in order to successfully launch a NFT collection. For example, if you look on Upwork there are a lot of postings for people looking for Solidity developers to help launch their NFT project. Some of these projects even have website designers, but not Solidity developers.

For my final project I'm going to create a website that allows buyers (EOAs) to mint X number of NFTs at launch. This is a popular model since the NFT creator doesn't have to pay the gas fees to mint X number of NFTs at once which is hundreds of thousands of dollars. The buyers pay the gas fees to mint NFTs instead of the NFT creator, saving the NFT creator a lot of money.

For example, let's say the NFT artist has 10,000 randomly generated unique dogs they want to launch as a NFT collection. They only want each buyer (EOA) to be able to mint 10 dogs out of their collection. The buyer does not know which unique dog they are buying so they buy 10 in the hopes of getting a rare dog with unique traits.

In the future, this would be a scalable platform where artists can launch multiple NFT collections with a press of a button, but for now I'm going to build this where you will need to manually change certain parts of the code in order to launch different NFT collections.

## Heroku link

https://bitbirds.herokuapp.com/

## Video Walkthrough

https://www.loom.com/share/d4cca53de9d34cabac43c9e196e80534

## Simple Workflow

1. Make sure you're connected to the rinkeby testnet on MetaMask.
2. Connect your wallet to the website.
3. Mint the desired number of NFTs.
4. Wait for transaction to be completed.
5. Once completed view your NFTs on OpenSea.

## Prerequisites

-   python3
-   npm
-   npx
-   `git checkout master`

## Installation Instructions

First, open a terminal in the `scripts` directory.

### bootstrap.py

Run this file using `python3 bootstrap.py` which will `npm install` for your `blockchain` folder and `frontend` folder. This will install all the required dependencies including `hardhat` in your `blockchain` folder.

### tests.py

Run this file using `python3 tests.py` which will run 5 tests for the smart contract using `hardhat`.

### server-backend.py

Run this file using `python3 server-backend.py` if you want to run a local backend server. I would not recommend this unless you really want to play around with the backend of MongoDB. You should only do this if you want to setup your own database with MongoDB and initialize it with the NFT metadata and images.

### server-frontend.py

Run this file using `python3 server-frontend.py` if you want to run a local frontend server. Currently the frontend is setup to proxy to the heroku link. You will need to update this in the `package.json` file in the `frontend` folder if you are using a local backend server.

## Populate env files

### backend env file

Create `.env` file in `backend` folder and populate with the code below for flask:

FLASK_APP=app.py<br>
FLASK_ENV=production

### blockchain env file

Create `.env` file in the `blockchain` folder.
You will need to get a rinkeby API_URL from https://www.alchemy.com/<br>
Update the private key and public key for your wallet<br>
You will need to get an API key from https://etherscan.io/<br>

API_URL<br>
PRIVATE_KEY<br>
PUBLIC_KEY<br>
ETHERSCAN_API_KEY<br>

### frontend env file

Create `.env` file in the `frontend` folder.
You will need to use the same alchemy url from the `blockchain` `.env` file.<br>

REACT_APP_ALCHEMY_KEY<br>
REACT_APP_CONTRACT_ADDRESS = "0xc54b890D6fc15cEe98a42Bd2EE1E2841aaCBBb88"

## Directory Structure

### backend

This is the folder where my python files are that connect to MongoDB to manage the metadata. The idea is that post sale, we will migrate to IPFS. I would not touch the files in here unless you want to host your own NFT metadata and images via MongoDB.

### blockchain

This is the folder where the smart contract code lives along with the tests for the smart contract.

### frontend

This is the folder where the React code lives. The main files are Minter.js and interact.js.

### root directory

This is the root of the project where there is information about avoiding common attacks, the deployed address, and design patterns. There is also a Procfile and requirements.txt file for heroku.
