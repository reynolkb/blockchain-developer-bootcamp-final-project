const { expect } = require('chai');
const { ethers } = require('ethers');

describe('BitBirds', function () {
	// basic test to return name and symbol that is entered
	it('Should return the right name and symbol', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();
		expect(await bitBirds.name()).to.equal('BitBirds');
		expect(await bitBirds.symbol()).to.equal('BB');
		expect(await bitBirds.baseURI()).to.equal('https://bitbirds.herokuapp.com/metadata/');
	});
	// test to verify public key and contract address are set to the from and to
	it('signedTx from and to should equal public key and contract address', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();

		// private and public key from local blockchain network
		const provider = new ethers.providers.JsonRpcProvider();
		const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
		const signer = new ethers.Wallet(privateKey, provider);
		const publicKey = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

		const _nonce = await signer.getTransactionCount('latest');

		bitBirds.on('printNewTokenId', (newTokenId) => {
			const _newTokenId = newTokenId;
			console.log(_newTokenId);
		});

		let ABI = ['function mint(uint256 _mintAmount)'];
		let iface = new ethers.utils.Interface(ABI);

		const _data = iface.encodeFunctionData('mint', [1]);
		const _contractAddress = bitBirds.address;

		// gasPrice is null since it's an EIP-1559 transaction
		const _gasPrice = await provider.getGasPrice();
		const _gasLimit = 500000;

		const tx = {
			from: publicKey,
			to: _contractAddress,
			nonce: _nonce,
			gasLimit: _gasLimit,
			gasPrice: _gasPrice,
			data: _data,
			value: ethers.utils.parseEther('0.01'),
		};

		const signedTx = await signer.sendTransaction(tx);
		expect(signedTx['from']).to.equal(publicKey);
		expect(signedTx['to']).to.equal(_contractAddress);
	});
	// test to make sure the item id is getting updated
	it('newItemId should be 6 since we are testing a new instance of the contract', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();

		const provider = new ethers.providers.JsonRpcProvider();
		const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
		const signer = new ethers.Wallet(privateKey, provider);
		const publicKey = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
		const tokenURI = 'https://gateway.pinata.cloud/ipfs/QmWBCpgGeTQJojTgEi6iSnxf8FhVdhKGiwL2cxJ4Ahaxjr';

		const _nonce = await signer.getTransactionCount('latest');

		bitBirds.on('printNewTokenId', (newTokenId) => {
			const _newTokenId = newTokenId;
			console.log(_newTokenId);
		});

		let ABI = ['function mint(uint256 _mintAmount)'];
		let iface = new ethers.utils.Interface(ABI);

		const _data = iface.encodeFunctionData('mint', [1]);
		const _contractAddress = bitBirds.address;

		// gasPrice is null since it's an EIP-1559 transaction
		const _gasPrice = await provider.getGasPrice();
		const _gasLimit = 500000;

		const tx = {
			from: publicKey,
			to: _contractAddress,
			nonce: _nonce,
			gasLimit: _gasLimit,
			gasPrice: _gasPrice,
			data: _data,
			value: ethers.utils.parseEther('0.01'),
		};

		const signedTx = await signer.sendTransaction(tx);
		const txHash = signedTx['hash'];

		const txReceipt = await provider.waitForTransaction(txHash);
		let _newItemId = parseInt(txReceipt['logs'][1]['data'], 16);
		_newItemId = _newItemId.toString();

		expect(_newItemId).to.equal('6');
	});
	// test to make sure the balance of smart contract is updated and can hold ethereum
	it('getBalance should return a balance of 0.01 eth', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();

		// private and public key from local blockchain network
		const provider = new ethers.providers.JsonRpcProvider();
		const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
		const signer = new ethers.Wallet(privateKey, provider);
		const publicKey = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

		const _nonce = await signer.getTransactionCount('latest');

		bitBirds.on('printNewTokenId', (newTokenId) => {
			const _newTokenId = newTokenId;
			console.log(_newTokenId);
		});

		let ABI = ['function mint(uint256 _mintAmount)'];
		let iface = new ethers.utils.Interface(ABI);

		const _data = iface.encodeFunctionData('mint', [1]);
		const _contractAddress = bitBirds.address;

		// gasPrice is null since it's an EIP-1559 transaction
		const _gasPrice = await provider.getGasPrice();
		const _gasLimit = 500000;

		const tx = {
			from: publicKey,
			to: _contractAddress,
			nonce: _nonce,
			gasLimit: _gasLimit,
			gasPrice: _gasPrice,
			data: _data,
			value: ethers.utils.parseEther('0.01'),
		};

		await signer.sendTransaction(tx);
		let balance = await bitBirds.getBalance();
		balance = parseInt(balance['_hex'], 16);
		balance = balance.toString();
		expect(balance).to.equal('10000000000000000');
	});
	// test to make sure the owner can withdraw money from the smart contract and the balance of the contract is updated to 0
	it('withdrawBalance should withdraw balance and contract balance should be 0', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();

		// private and public key from local blockchain network
		const provider = new ethers.providers.JsonRpcProvider();
		const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
		const signer = new ethers.Wallet(privateKey, provider);
		const publicKey = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

		const _nonce = await signer.getTransactionCount('latest');

		bitBirds.on('printNewTokenId', (newTokenId) => {
			const _newTokenId = newTokenId;
			console.log(_newTokenId);
		});

		let ABI = ['function mint(uint256 _mintAmount)'];
		let iface = new ethers.utils.Interface(ABI);

		const _data = iface.encodeFunctionData('mint', [1]);
		const _contractAddress = bitBirds.address;

		// gasPrice is null since it's an EIP-1559 transaction
		const _gasPrice = await provider.getGasPrice();
		const _gasLimit = 500000;

		const tx = {
			from: publicKey,
			to: _contractAddress,
			nonce: _nonce,
			gasLimit: _gasLimit,
			gasPrice: _gasPrice,
			data: _data,
			value: ethers.utils.parseEther('0.01'),
		};

		await signer.sendTransaction(tx);
		await bitBirds.withdraw();
		let contractBalance = await provider.getBalance(_contractAddress);
		contractBalance = parseInt(contractBalance['_hex'], 16);
		contractBalance = contractBalance.toString();
		expect(contractBalance).to.equal('0');
	});
	// test to make sure that when the non-owner withdraws the transaction is reverted
	it('test to make sure that when the non-owner withdraws the transaction is reverted', async function () {
		const BitBirds = await hre.ethers.getContractFactory('BitBirds');
		const bitBirds = await BitBirds.deploy('BitBirds', 'BB', 'https://bitbirds.herokuapp.com/metadata/');

		await bitBirds.deployed();

		// private and public key from local blockchain network
		const provider = new ethers.providers.JsonRpcProvider();
		const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
		const signer = new ethers.Wallet(privateKey, provider);
		const publicKey = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

		// non owner public key
		const nonOwnerPrivateKey = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';
		const nonOwnerSigner = new ethers.Wallet(nonOwnerPrivateKey, provider);
		const nonOwnerPublicKey = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';

		const _nonce = await signer.getTransactionCount('latest');

		bitBirds.on('printNewTokenId', (newTokenId) => {
			const _newTokenId = newTokenId;
			console.log(_newTokenId);
		});

		let ABI = ['function mint(uint256 _mintAmount)'];
		let iface = new ethers.utils.Interface(ABI);

		const _data = iface.encodeFunctionData('mint', [1]);
		const _contractAddress = bitBirds.address;

		// gasPrice is null since it's an EIP-1559 transaction
		const _gasPrice = await provider.getGasPrice();
		const _gasLimit = 500000;

		const tx = {
			from: publicKey,
			to: _contractAddress,
			nonce: _nonce,
			gasLimit: _gasLimit,
			gasPrice: _gasPrice,
			data: _data,
			value: ethers.utils.parseEther('0.01'),
		};

		await signer.sendTransaction(tx);
		await expect(bitBirds.connect(nonOwnerSigner).withdraw()).to.be.revertedWith('Ownable: caller is not the owner');
	});
});
