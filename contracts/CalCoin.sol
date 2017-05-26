pragma solidity ^0.4.11;

contract CalCoin {

    address owner;
    mapping (address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 amount);

    function CalCoin() {
        owner = msg.sender;
        balanceOf[owner] = 100;
    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    function transfer(address _sender, address _recipient, uint256 _amount) onlyOwner {
      if (balanceOf[_sender] < _amount) throw;
      balanceOf[_sender] -= _amount;
      balanceOf[_recipient] += _amount;

      Transfer(_sender, _recipient, _amount);
    }
}
