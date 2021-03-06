# blockchain-developer-bootcamp-final-project

## Overview

Due to the rise in popularity of NFTs, there has been a huge rise in artists that want to create NFTs and launch collections. However, a lot of these artists don't have the technical background needed in order to successfully launch a NFT collection. For example, if you look on Upwork there are a lot of postings for people looking for Solidity developers to help launch their NFT project. Some of these projects even have website designers, but not Solidity developers.

I've created a website that allows users to mint 3 NFTs per wallet out of a total of 1,000. This is a popular model that a lot of collections follow, mint X number of NFTs out of Y total. I'm very excited because I've started my own LLC to help artists create NFT collections and websites. I see a very bright future in the NFT space and I feel like they are just getting started.

In the future, I want to template this so you can easily integrate it into an existing website. Please see the [Future Development](#Future-Development) section for more.

## Heroku link

https://bitbirds.herokuapp.com/

## Video Walkthrough

Demo: https://www.loom.com/share/d4cca53de9d34cabac43c9e196e80534 <br>
Running Tests with Hardhat: https://www.loom.com/share/ab19d15d2f8249b484d7425bd5ef2df8 <br>
Running the frontend locally: https://www.loom.com/share/b5c6a5618305487fa99f1587f9e72970

## Public Ethereum Account

Here is my public ethereum account to receive my certification as an NFT: 0x109a296b271CC2A73E4cC0FaD2aFf4784e6b8bF1

## Simple Workflow

1. Make sure you're connected to the rinkeby testnet on MetaMask.
2. Connect your wallet to the website.
3. Mint the desired number of NFTs.
4. Wait for transaction to be completed.
5. Once completed view your NFTs on OpenSea.

## Prerequisites

-   python3
-   Node.js >= v14
-   npm
-   npx
-   `git checkout master`

## Installation Instructions

First, open a terminal in the `scripts` directory.

### bootstrap.py

Run this file using `python3 bootstrap.py` which will `npm install` for your `blockchain` folder and `frontend` folder. This will install all the required dependencies including `hardhat` in your `blockchain` folder.

### tests.py

Go to the `hardhat.config.js` file and uncomment lines 14-16 so `localhost` is visible. Comment out lines 19-22 so `rinkeby` is not visible. Run this file using `python3 tests.py` which will run 6 tests for the smart contract using `hardhat`.<br>

If you get stuck please watch the Loom video in the [Video Walkthrough](#Video-Walkthrough) section.

### server-backend.py

Run this file using `python3 server-backend.py` if you want to run a local backend server. I would not recommend this unless you really want to play around with the backend of MongoDB. You should only do this if you want to setup your own database with MongoDB and initialize it with the NFT metadata and images.

### server-frontend.py

Run this file using `python3 server-frontend.py` if you want to run a local frontend server. Currently the frontend is setup to proxy to the heroku link. You will need to update this in the `package.json` file in the `frontend` folder if you are using a local backend server.<br>

Make sure you create a `.env` file in the `frontend` folder by following the instructions in the [frontend env file](#frontend-env-file) section before running `python3 server-frontend.py`.<br>

If you get stuck please watch the Loom video in the [Video Walkthrough](#Video-Walkthrough) section.

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
You will need to use the same alchemy url from the `blockchain` `.env` file. This is generated by getting a rinkeby key from https://www.alchemy.com/<br>

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

## Future Development

-   I would like to clean up the frontend UI/UX and make it look cleaner. I would also like to add some sections common NFT websites have like About Us and Meet the Team.
-   A lot of NFT collections have a presale where whitelisted users can mint NFTs before everyone else. I would like to implement this feature in the future.
-   I want to show the total supply or total number of NFTs that have been minted out of the total number of NFTs available. I didn't have time to fully think this through, but it is a good item to add for the future.
