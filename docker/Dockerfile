FROM ubuntu:17.04

# Install Ethereum/geth
RUN apt-get update && apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update && apt-get install -y ethereum

# Install Solidity compiler
RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get update && apt-get install -y solc

# Install Node.js
RUN apt-get update && apt-get install -y build-essential
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN apt-get update && apt-get install -y git

# Install Truffle tooling
RUN npm install -g truffle
RUN npm install -g ethereumjs-testrpc
