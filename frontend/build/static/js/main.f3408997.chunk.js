(this['webpackJsonpnft-minter'] = this['webpackJsonpnft-minter'] || []).push([
	[0],
	{
		247: function (e, t, n) {},
		248: function (e, t, n) {},
		254: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_newTokenId","type":"uint256"}],"name":"printNewTokenId","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'
			);
		},
		265: function (e, t) {},
		286: function (e, t) {},
		288: function (e, t) {},
		366: function (e, t) {},
		368: function (e, t) {},
		377: function (e, t) {},
		379: function (e, t) {},
		404: function (e, t) {},
		409: function (e, t) {},
		411: function (e, t) {},
		418: function (e, t) {},
		431: function (e, t) {},
		493: function (e, t) {},
		529: function (e, t, n) {},
		530: function (e, t, n) {
			'use strict';
			n.r(t);
			var a = n(19),
				r = n.n(a),
				s = n(228),
				i = n.n(s),
				u = (n(247), n(248), n(14)),
				o = n.n(u),
				p = n(32),
				c = n(47),
				d = n(7);
			n(251).config();
			var l = n(254),
				y = '0x781B479795d72742491B4f522A811e1847fcCc9A',
				m = (0, n(124).createAlchemyWeb3)('https://eth-rinkeby.alchemyapi.io/v2/NGxwRcG2EtrikJ029J4wdMQ1cK6KxUnv'),
				b = (function () {
					var e = Object(p.a)(
						o.a.mark(function e() {
							var t, n;
							return o.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												if (!window.ethereum) {
													e.next = 14;
													break;
												}
												return (e.prev = 1), (e.next = 4), window.ethereum.request({ method: 'eth_requestAccounts' });
											case 4:
												return (t = e.sent), (n = { status: '\ud83d\udc46\ud83c\udffd Click above to get your BitBird NFT', address: t[0] }), e.abrupt('return', n);
											case 9:
												return (e.prev = 9), (e.t0 = e.catch(1)), e.abrupt('return', { address: '', status: '\ud83d\ude25 ' + e.t0.message });
											case 12:
												e.next = 15;
												break;
											case 14:
												return e.abrupt('return', {
													address: '',
													status: Object(d.jsx)('span', {
														children: Object(d.jsxs)('p', {
															children: [
																' ',
																'\ud83e\udd8a',
																' ',
																Object(d.jsx)('a', {
																	target: '_blank',
																	rel: 'noreferrer',
																	href: 'https://metamask.io/download.html',
																	children: 'You need to download MetaMask.',
																}),
															],
														}),
													}),
												});
											case 15:
											case 'end':
												return e.stop();
										}
								},
								e,
								null,
								[[1, 9]]
							);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				f = (function () {
					var e = Object(p.a)(
						o.a.mark(function e() {
							var t;
							return o.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												if (!window.ethereum) {
													e.next = 17;
													break;
												}
												return (e.prev = 1), (e.next = 4), window.ethereum.request({ method: 'eth_accounts' });
											case 4:
												if (!((t = e.sent).length > 0)) {
													e.next = 9;
													break;
												}
												return e.abrupt('return', { address: t[0], status: '\ud83d\udc46\ud83c\udffd Click above to get your BitBird NFT' });
											case 9:
												return e.abrupt('return', { address: '', status: '\ud83e\udd8a Connect to Metamask using the top right button.' });
											case 10:
												e.next = 15;
												break;
											case 12:
												return (e.prev = 12), (e.t0 = e.catch(1)), e.abrupt('return', { address: '', status: '\ud83d\ude25 ' + e.t0.message });
											case 15:
												e.next = 18;
												break;
											case 17:
												return e.abrupt('return', {
													address: '',
													status: Object(d.jsx)('span', {
														children: Object(d.jsxs)('p', {
															children: [
																' ',
																'\ud83e\udd8a',
																' ',
																Object(d.jsx)('a', {
																	target: '_blank',
																	rel: 'noreferrer',
																	href: 'https://metamask.io/download.html',
																	children: 'You need to download MetaMask.',
																}),
															],
														}),
													}),
												});
											case 18:
											case 'end':
												return e.stop();
										}
								},
								e,
								null,
								[[1, 12]]
							);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				h = (function () {
					var e = Object(p.a)(
						o.a.mark(function e(t) {
							var n, a, r;
							return o.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), new m.eth.Contract(l, y);
											case 2:
												return (
													(window.contract = e.sent),
													(n = (n = '0x48547bc59493d081e8f62944d526443d84fdc4d6' === window.ethereum.selectedAddress ? 0 : 0.01 * t).toString()),
													(a = {
														to: y,
														from: window.ethereum.selectedAddress,
														data: window.contract.methods.mint(t).encodeABI(),
														value: parseInt(m.utils.toWei(n, 'ether')).toString(16),
													}),
													(e.prev = 6),
													(e.next = 9),
													window.ethereum.request({ method: 'eth_sendTransaction', params: [a] })
												);
											case 9:
												return (r = e.sent), e.abrupt('return', { txHash: r, success: !0, status: '\u2705 Please keep this tab open until your transaction is complete.' });
											case 13:
												return (e.prev = 13), (e.t0 = e.catch(6)), e.abrupt('return', { success: !1, status: '\ud83d\ude25 Something went wrong: ' + e.t0.message });
											case 16:
											case 'end':
												return e.stop();
										}
								},
								e,
								null,
								[[6, 13]]
							);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				w = (n(529), (0, n(124).createAlchemyWeb3)('https://eth-rinkeby.alchemyapi.io/v2/NGxwRcG2EtrikJ029J4wdMQ1cK6KxUnv'));
			w.eth.handleRevert = !0;
			var x = function () {
				var e = Object(a.useState)(''),
					t = Object(c.a)(e, 2),
					n = t[0],
					s = t[1],
					i = Object(a.useState)(5),
					u = Object(c.a)(i, 2),
					l = u[0],
					y = u[1],
					m = Object(a.useState)(''),
					x = Object(c.a)(m, 2),
					T = x[0],
					j = x[1],
					g = Object(a.useState)(''),
					v = Object(c.a)(g, 2),
					O = v[0],
					k = v[1],
					M = Object(a.useState)(''),
					B = Object(c.a)(M, 2),
					I = B[0],
					F = B[1],
					A = Object(a.useState)(''),
					N = Object(c.a)(A, 2),
					S = N[0],
					C = N[1];
				function _() {
					window.ethereum
						? window.ethereum.on('accountsChanged', function (e) {
								e.length > 0
									? (s(e[0]), j('\ud83d\udc46\ud83c\udffd Click above to get your BitBird NFT'))
									: (s(''), j('\ud83e\udd8a Connect to Metamask using the top right button.'));
						  })
						: ((document.getElementById('mintButton').disabled = !0),
						  j(
								Object(d.jsxs)('p', {
									children: [
										' ',
										'\ud83e\udd8a',
										' ',
										Object(d.jsx)('a', { target: '_blank', rel: 'noreferrer', href: 'https://metamask.io/download.html', children: 'You need to download MetaMask.' }),
									],
								})
						  ));
				}
				Object(a.useEffect)(function () {
					function e() {
						return (e = Object(p.a)(
							o.a.mark(function e() {
								var t, n, a;
								return o.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (e.next = 2), f();
											case 2:
												(t = e.sent), (n = t.address), (a = t.status), s(n), j(a), _();
											case 8:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)).apply(this, arguments);
					}
					!(function () {
						e.apply(this, arguments);
					})();
				}, []);
				var E = (function () {
					var e = Object(p.a)(
						o.a.mark(function e() {
							var t;
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (e.next = 2), b();
										case 2:
											(t = e.sent), j(t.status), s(t.address);
										case 5:
										case 'end':
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})();
				function R(e) {
					return H.apply(this, arguments);
				}
				function H() {
					return (H = Object(p.a)(
						o.a.mark(function e(t) {
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												'return',
												new Promise(function (e) {
													setTimeout(e, t);
												})
											);
										case 1:
										case 'end':
											return e.stop();
									}
							}, e);
						})
					)).apply(this, arguments);
				}
				function J(e) {
					return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				}
				var L = (function () {
					var e = Object(p.a)(
						o.a.mark(function e() {
							var t, n, a, r, s, i, u, p, c, d, l, m;
							return o.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if ((k(' '), F(' '), C(' '), '' !== (s = document.getElementById('mintAmount').value))) {
												e.next = 7;
												break;
											}
											return alert('mint amount cannot be empty'), e.abrupt('return');
										case 7:
											if (!(s > 3)) {
												e.next = 10;
												break;
											}
											return alert('mint amount cannot be greater than 3'), e.abrupt('return');
										case 10:
											return (document.getElementById('mintButton').innerHTML = 'loading Metamask...'), (e.next = 13), h(s);
										case 13:
											if (((r = e.sent), (t = r.txHash), (n = r.success), (a = r.status), !n)) {
												e.next = 24;
												break;
											}
											(document.getElementById('mintButton').innerHTML = 'pending transaction...'),
												k('Check out your pending transaction on Etherscan in a new tab while you wait.'),
												F('https://rinkeby.etherscan.io/tx/'.concat(t)),
												C('Pending Transaction'),
												(e.next = 27);
											break;
										case 24:
											return (document.getElementById('mintButton').innerHTML = 'Mint NFT'), j(a), e.abrupt('return');
										case 27:
											j(a), (i = 0);
										case 29:
											if (!(i < 175)) {
												e.next = 47;
												break;
											}
											return (e.next = 32), w.eth.getTransactionReceipt(t);
										case 32:
											if (null !== (u = e.sent)) {
												e.next = 43;
												break;
											}
											return (e.next = 36), R(5e3);
										case 36:
											return (p = (p = 5 * (i + 1)).toString()), console.log(''.concat(p, ' seconds has passed for the pending transaction')), e.abrupt('continue', 44);
										case 43:
											return e.abrupt('break', 47);
										case 44:
											i++, (e.next = 29);
											break;
										case 47:
											if ((console.log(u), console.log(t), u.status)) {
												if (((d = []), console.log(u.logs), u.logs.length < 3))
													(l = parseInt(u.logs[1].data, 16)),
														d.push(l),
														(c = d.length - 1),
														y(J(d[c])),
														k('Now that your transaction is completed, you can view your NFT on OpenSea once the metadata is revealed. Your token id is '.concat(d, '.')),
														C('Completed Transaction');
												else {
													for (m = 1; m <= u.logs.length; m += 2) (l = parseInt(u.logs[m].data, 16)), d.push(l);
													(c = d.length - 1),
														y(J(d[c])),
														k(
															'Now that your transaction is completed, you can view your NFTs on OpenSea once the metadata is revealed. Your token ids are '.concat(
																d,
																'.'
															)
														),
														C('Completed Transaction');
												}
												document.getElementById('mintButton').innerHTML = 'Mint NFT';
											} else
												(document.getElementById('transactionStatus').style.color = 'red'),
													k('Please click the link below for the reason your transaction failed.'),
													F('https://rinkeby.etherscan.io/tx/'.concat(t)),
													C('Failed Transaction');
											document.getElementById('mintButton').innerHTML = 'Mint NFT';
										case 52:
										case 'end':
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})();
				return Object(d.jsx)(r.a.Fragment, {
					children: Object(d.jsxs)('div', {
						className: 'section',
						children: [
							Object(d.jsx)('h1', { id: 'title', children: 'Mint BitBird NFT' }),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('button', {
								id: 'walletButton',
								onClick: E,
								children: n.length > 0 ? 'Connected: ' + String(n).substring(0, 6) + '...' + String(n).substring(38) : Object(d.jsx)('span', { children: 'Connect Wallet' }),
							}),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('br', {}),
							Object(d.jsxs)('p', { children: ['Tokens Minted: ', l, '/1,000'] }),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('p', { children: 'Get your random BitBird NFT below, all NFTs are 0.01 ETH!' }),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('label', { htmlFor: 'mintAmount', children: 'Number of NFTs to mint (3 max per wallet)' }),
							Object(d.jsx)('br', {}),
							Object(d.jsxs)('select', {
								name: 'mintAmount',
								id: 'mintAmount',
								children: [
									Object(d.jsx)('option', { value: '1', children: '1' }),
									Object(d.jsx)('option', { value: '2', children: '2' }),
									Object(d.jsx)('option', { value: '3', children: '3' }),
								],
							}),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('button', { id: 'mintButton', onClick: L, children: 'Mint NFT' }),
							Object(d.jsx)('p', { id: 'status', children: T }),
							Object(d.jsx)('br', {}),
							Object(d.jsx)('br', {}),
							Object(d.jsxs)('p', {
								id: 'transactionStatus',
								children: [O, Object(d.jsx)('br', {}), Object(d.jsx)('a', { href: ''.concat(I), target: '_blank', rel: 'noreferrer', children: S })],
							}),
						],
					}),
				});
			};
			var T = function () {
					return Object(d.jsx)('div', { className: 'App', children: Object(d.jsx)(x, {}) });
				},
				j = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 533))
							.then(function (t) {
								var n = t.getCLS,
									a = t.getFID,
									r = t.getFCP,
									s = t.getLCP,
									i = t.getTTFB;
								n(e), a(e), r(e), s(e), i(e);
							});
				};
			i.a.render(Object(d.jsx)(r.a.StrictMode, { children: Object(d.jsx)(T, {}) }), document.getElementById('root')), j();
		},
	},
	[[530, 1, 2]],
]);
//# sourceMappingURL=main.f3408997.chunk.js.map
