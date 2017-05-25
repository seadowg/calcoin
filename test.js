calcoin = CalCoin.at(contractAddress)

if (calcoin.balanceOf(web3.eth.accounts[0]) == 100) {
  console.log("Initial setup all good! 100 Calcoins in main account.")
  true
} else {
  false
}
