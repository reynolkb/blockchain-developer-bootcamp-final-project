async function main() {
	// MyNFT is a factory for instances of our NFT contract
	const BitBirds = await ethers.getContractFactory('BitBirds');

	// Start deployment, returning a promise that resolves to a contract object
	const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');
	console.log('Contract deployed to address:', bitBirds.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
