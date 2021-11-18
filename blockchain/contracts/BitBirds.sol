// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title A contract that mints NFT tokens
/// @author kyle reynolds
contract BitBirds is ERC721Enumerable, Ownable {
    /// @dev storage variables
    using Strings for uint256;
    /// @dev baseURI for example: https://bitbirds.herokuapp.com/metadata/
    string public baseURI;
    /// @dev set baseExtension to .json
    /// @dev you need this since ipfs is adding it when ipfs is hosting the NFT json
    /// @dev https://gateway.pinata.cloud/ipfs/QmYrVgtkHnXDw9KURzgSbmejgzpEcje6FV5AofEmBx98kz/1.json
    string public baseExtension = ".json";
    /// @dev cost for each nft
    uint256 public cost = 0.01 ether;
    /// @dev max supply of NFT tokens
    uint256 public maxSupply = 1000;
    /// @dev max amount a wallet can mint
    uint256 public maxMintAmount = 3;
    /// @dev paused boolean for pausing the smart contract
    bool public paused = false;

    /// @dev events
    event printNewTokenId(uint256 _newTokenId);

    /// @dev modifiers placeholder

    /// @dev constructor
    /// @dev SWC-118 Incorrect Constructor Name vector attack protection
    /// @dev Initializes the contract setting the name, symbol and baseURI. Also mints 5 NFTs to the contract owner.
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        mint(5);
        setBaseURI(_initBaseURI);
    }

    /// @dev internal functions
    /// @dev returns baseURI and overrides built in function
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    /// @dev public functions
    /// @dev mints X number of NFTs by passing mintAmount
    function mint(uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        /// @dev contract cannot be paused
        require(!paused, "Contract cannot be paused.");
        /// @dev mint amount greater then 0
        require(_mintAmount > 0, "Mint amount has to be greater then 0.");
        /// @dev current supply + mintAmount has to be less then maxSupply
        require(supply + _mintAmount <= maxSupply, "The current supply plus your mint amount has to be less then or equal to the max supply.");

        /// @dev if msg.sender is not the owner
        if (msg.sender != owner()) {
            /// @dev the balance of the sender plus the amount they want to mint has to be less then the max mint amount
            require(balanceOf(msg.sender) + _mintAmount <= maxMintAmount, "You can only purchase 3 tokens");
            /// @dev charge them
            /// @dev SWC-105 Unprotected Ether Withdrawal vector attack protection
            require(msg.value >= cost * _mintAmount);
        }

        /// @dev supply starts at 0 and goes up by 1 each time
        /// @dev i starts at 1 for each minting round
        /// @dev for example, if the first buyer only bought 1, it would be supply(0) + i(1) = 1 --> 1 for the token tokenId
        /// @dev next round, the buyer buys 2, it would be supply(1) + i(1) && supply(1) + i(2) --> 2 and 3 for the tokenIds
        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint256 newTokenId = supply + i;
            _safeMint(msg.sender, newTokenId);
            emit printNewTokenId(newTokenId);
        }
    }

    /// @dev passes in the wallet address and returns what token ids that wallet owns
    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    /// @dev pass in the tokenId and return the baseURI for that token
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension)) : "";
    }

    /// @dev override renounce ownership 
    function renounceOwnership() public pure override {
        revert("Can't renounce ownership here");
    }

    /// @dev only owner functions
    /// @dev set new cost function
    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    /// @dev set max mint amount function
    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    /// @dev set base uri function
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    /// @dev set base extension function
    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    /// @dev update pause state
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    /// @dev get balance of contract
    function getBalance() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    /// @dev withdraw to owner
    function withdraw() public payable onlyOwner {
        /// @dev SWC-132 Unexpected Ether balance vector attack protection
        payable(owner()).transfer(getBalance());
    }
}
