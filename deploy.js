CalCoin = web3.eth.contract(abi)

CalCoin.new({ from: web3.eth.accounts[0], data: "0x" + bytecode, gas: 1000000 }, function(e, contract) {
  if (!e) {
    if (!contract.address) {
      console.log("Contract transaction send: TransactionHash: " +
        contract.transactionHash + " waiting to be mined...");
    } else {
      console.log("Contract mined! Address: " + contract.address);
    }
  }
})
