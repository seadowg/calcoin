#!/bin/bash

solc --bin --abi --overwrite -o build calcoin.sol
echo "**** Bytecode ****"
echo ""
cat build/CalCoin.bin
echo ""

echo ""
echo "**** ABI ****"
echo ""
cat build/CalCoin.abi
echo ""
