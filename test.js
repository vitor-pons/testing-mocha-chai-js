describe ("pow", function () {

    it("the negative result for x in NaN", function() {
        assert.isNaN(pow(2, -1));
    })

    it("the non-integer result for x is NaN", function() {
        assert.isNaN(pow(2, 1.3));
    })

    describe ("raises x to power 3", function() {
        function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power of 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected)
        });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });
    
});