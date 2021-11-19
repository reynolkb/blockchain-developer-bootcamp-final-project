# Overview

I was mainly worried about people either purchasing more then 3 NFT tokens or trying to send any other amount other then 0.01 ETH. I also had to take into account that the owner of the contract could mint an NFT and only pay the gas fees.<br><br>
As a result I put a require statement into my if block within my mint function.<br>

```
if (msg.sender != owner()) {
    /// @dev the balance of the sender plus the amount they want to mint has to be less then the max mint amount
    require(balanceOf(msg.sender) + \_mintAmount <= maxMintAmount, "You can only purchase 3 tokens");
    /// @dev charge them
    /// @dev SWC-105 Unprotected Ether Withdrawal vector attack protection
    require(msg.value >= cost \* \_mintAmount);
}
```

This ensured that if you were not the owner, you were only able to purchase 3 tokens. You would also get charged if you were not the owner.

## SWC-103 (Floating pragma)

Specific complier pragma `0.8.0` used in contracts to avoid accidental bug inclusion through outdated compiler versions.

## SWC-105 (Unprotected Ether Withdrawal)

`withdraw` is protected by Open Zeppelin's `Ownable`'s `onlyOwner` modifier. I overrode a few functions like removeOnwership because I didn't want to ever click that function by accident. The Only Owner modifier ensured that only the contract owner was able withdraw the balance to themselves along with other functionality.

I also used Open Zeppelins ERC721Enumerable contract which is the go to smart contract for handling NFTs. They have a lot of security features built in already that I was able to inherit.

## SWC-118 (Incorrect Constructor Name)

`constructor` is named correctly according to the [standards](https://swcregistry.io/docs/SWC-118)
