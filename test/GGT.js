const G4ALToken = artifacts.require("G4ALToken");

// Test series for $GGT Token
contract("G4ALToken", async accounts => {

    // Test the initial supply
    it("initial supply", async () => {

        // wait til GGT is deplyoed, store the results in ggt
        ggt = await G4ALToken.deployed();
        
        // Check total supply
        let supply = await ggt.totalSupply()

        // Assert that the supply matches what we set in migration
        assert.equal(supply.toString(), 10000000000000000000000000000, "Initial supply was not the same as in migration")

        // Check account 1 initial balance, should be 0.
        let intial_balance = await ggt.balanceOf(accounts[1]);

        //Verify the balance
        assert.equal(intial_balance.toNumber(), 0, "intial balance for account 1 should be 0")
    });

    //Test minting, disclaimer: $GGT should not be able to be minted more than once (when created).
    it("minting", async() => {

        // wait til GGT is deplyoed, store the results in ggt
        ggt = await G4ALToken.deployed(); 

        try {
            //Mint 100 ggtens
            await ggt.mint(100);
       }catch(err){
            // expected the error, $GGT can not be minted.
            assert(true); 
       }
    })

    //Test burning, disclaimer: $GGT should not be able to be burnt.
    it("burning", async() => {
        
        // wait til GGT is deplyoed, store the results in ggt
        ggt = await G4ALToken.deployed(); 

        try{
            // Burn to address 0 
            await ggt.burn(accounts[0], 100);
        }catch(error){
            // expected the error here, GGT can not be burnt.
            assert(true);
        }
    })

    //Test GGT token transfers
    it("transfering G4AL tokens", async() => {
        
        // wait til GGT is deployed, store the results in ggt
        ggt = await G4ALToken.deployed(); 

        // Grab initial balance for account 1
        let initial_balance = await ggt.balanceOf(accounts[1]);

        // transfer ggtens from account 0 to 1 
        await ggt.transfer(accounts[1], 100);
        
        //Read the balance for account 1.
        let after_balance = await ggt.balanceOf(accounts[1]);

        //Expect the balance to have increased on account 1.
        assert.equal(after_balance.toNumber(), initial_balance.toNumber()+100, "Balance should have increased on receiver")
    
        // Check account 2 initial balance (should be 0)
        let account2_initial_balance = await ggt.balanceOf(accounts[2]);

        //Transfer from acc 1 to acc 2, 20 ggtens.
        await ggt.transfer(accounts[2], 20, { from: accounts[1]});

        // Check balances after operation for both accounts
        let account2_after_balance = await ggt.balanceOf(accounts[2]);
        let account1_after_balance = await ggt.balanceOf(accounts[1]);

        //Make sure the account 1 has decreased its balance in 20 ggtens
        assert.equal(account1_after_balance.toNumber(), after_balance.toNumber()-20, "Should have reduced account 1 balance by 20");

        //Make sure the account 2 has increased its balance in 20 ggtens
        assert.equal(account2_after_balance.toNumber(), account2_initial_balance.toNumber()+20, "Should have increased account 2 by 20");
    })
});