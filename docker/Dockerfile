FROM ubuntu:17.04

RUN apt-get update && apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update && apt-get install -y ethereum

RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get update && apt-get install -y solc
