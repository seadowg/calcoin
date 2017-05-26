var CalCoin = artifacts.require("./CalCoin.sol");

contract('CalCoin', function(accounts) {

  it("puts 100 CalCoin in the owners account", function() {
    return CalCoin.new().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100);
    });
  });

  it("puts 0 in anyone elses", function() {
    return CalCoin.new().then(function(instance) {
      return instance.balanceOf.call(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 0);
    });
  });

  it("allows the owner to transfer", function() {
    var calcoin = null

    return CalCoin.new().then(function(instance) {
      calcoin = instance
      calcoin.transfer(accounts[0], accounts[1], 4, { from: accounts[0] });
      return calcoin.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 96);
      return calcoin.balanceOf.call(accounts[1])
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 4)
    });
  });

  it("emits a Transfer event", function() {
    return CalCoin.new().then(function(instance) {
      return instance.transfer(accounts[0], accounts[1], 11, { from: accounts[0] });
    }).then(function(result) {
      assert.equal(result.logs[0].event, "Transfer");
      assert.equal(result.logs[0].args.from, accounts[0]);
      assert.equal(result.logs[0].args.to, accounts[1]);
      assert.equal(result.logs[0].args.amount.valueOf(), 11);
    });
  });

  it("does not allow transfers if the sender does not have enough", function() {
      var expectedError = null;

      return CalCoin.new().then(function(instance) {
        return instance.transfer(accounts[0], accounts[1], 101, { from: accounts[0] });
      }).catch(function(e) {
        expectedError = e;
      }).then(function() {
        assert.isNotNull(expectedError);
      });
  });

  it("does not allow anyone other than the owner to make transfers", function() {
    var expectedError = null;
    var calcoin = null;

    return CalCoin.new().then(function(instance) {
      calcoin = instance;
      return instance.transfer(accounts[0], accounts[1], 5, { from: accounts[0] });
    }).then(function() {
      return calcoin.balanceOf.call(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 5);
      return calcoin.transfer(accounts[1], accounts[0], 4, { from: accounts[1] });
    }).catch(function(e) {
      expectedError = e;
    }).then(function() {
      assert.isNotNull(expectedError);
    });
  });
});
