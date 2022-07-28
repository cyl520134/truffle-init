var MathContract = artifacts.require("MathContract")
// console.log(MathContract)
contract('MathContract', function (accounts) {
    console.log("accounts:" + accounts)
    // console.log(web3.eth.getBalance(accounts[0]))  

    it("first", function () {
        return MathContract.deployed().then(function (instance) {
            // console.log(instance)      
            console.log("adress:" + instance.address)
            instance.add(1, 1).then(function (result) {
                console.log(result)
                assert.equal(result, 2, "add prompt");
            })
            instance.sub.call(5, 1).then(function (result) {
                console.log(result)
                assert.equal(result, 4, "sub prompt");
            })
        })

    })
    it("sencode", function () {
        return MathContract.deployed().then(function (instance) {
            console.log("adress:" + instance.address)
            instance.add(1, 1).then(function (result) {
                console.log(result.toNumber())
                assert.equal(result, 2, "add prompt");
            })
            instance.sub.call(5, 1).then(function (result) {
                console.log(result.toNumber())
                assert.equal(result, 3, "sub prompt");
            })
        })
    })
})