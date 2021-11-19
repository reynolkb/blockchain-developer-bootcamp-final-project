# Overview

Design was a bit challenging for this project because I used Solidity, React and Python with Flask and MongoDB. I grouped all my Solidity work into the Blockchain folder and the React code into the frontend folder. I'm using flask with Python and put those files in the backend folder.<br>

Within my blockchain folder I'm using hardhat and the default structure they give you. I do have a mint-nft.js script in order to interact with the testnet as well as a deploy file to deploy the contract. If you look within the hardhat.config.js file you can see the default testnet. For my smart contract file BitBirds.sol I followed the design pattern below which I got from the class.<br>

-   Storage variables are declared at the top of the contract
-   Events are after and are clearly defined by name
-   Modifiers are after which I did not use since I inherited them from Ownable
-   The constructor is at the top of the function

For the frontend folder I'm mainly using the Minter.js file. There I have all the logic for the page and some basic interact logic in the iteract.js file until the util folder.<br>

Finally, I have the bulk of the Python work in the nft.py file and nftUtil.py file. These allow React to interact with MongoDB and the backend api routes I setup with Flask to return the metadata and host the images.

# Design patterns used

## Access Control Design Patterns

`Ownable` design pattern used in seven functions: `setCost`, `setmaxMintAmount`, `setBaseURI`, `setBaseExtension`, `pause`, `getBalance` and `withdraw`. These functions only need to be used by the contract owner since they are the ones managing the NFT collection.

## Inheritance and Interfaces

`BitBirds` contract inherts the Open Zeppelin `Ownable` contract to enable ownership for the contract owner. It also inherits the Open Zeppelin `ERC721Enumerable` contract adhere to the NFT ERC721 contract standard.
