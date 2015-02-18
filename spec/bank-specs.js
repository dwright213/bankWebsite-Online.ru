describe('Account', function() {
  describe("deposit()", function() {
    it("adds money to a bank account", function() {
      var testAccount = Object.create(Account);
      testAccount.deposit(500);
      expect(testAccount.balance).to.equal(500);
    });
  });

  describe("withdraw()", function() {
    it("removes money from a bank account", function() {
      var testAccount = Object.create(Account);
      testAccount.deposit(500);
      testAccount.withdraw(250);
      expect(testAccount.balance).to.equal(250);
    });
  });

  describe("moniker", function() {
    it("returns the name for the bank account", function() {
      var testAccount = Object.create(Account);
      testAccount.moniker = "Saddam Hussein";
      expect(testAccount.moniker).to.equal("Saddam Hussein");
    });
  });
});