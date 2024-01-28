var assert = require('assert');
const calculator = require("../app/calculator")

describe('', () => {
    // Addition Test
    describe('Addition Test', () => {

        // add(5, 2) expected result 7 PASS
        it('adding 5 + 2, expected result is 7. (Intented to PASS)', () => {
            assert.equal(calculator.add(5,2),7)
        })

        // add(5,2) expected result 8 FAIL
        it('adding 5 + 2, expected result is 8. (Intented to FAIL)', () => {
            assert.equal(calculator.add(5,2),8)
        })
    })

    // Substraction Test
    describe('Substraction Test', () => {

        // sub(5, 2) expected result 3 PASS
        it('substracting 5 - 2, expected result 3. (Intended to PASS)', () => {
            assert.equal(calculator.sub(5,2),3)
        })

        // sub(5,2) expected result 5 FAIL
        it('substracting 5 - 2, expected result 5. (Intended to FAIL)', () => {
            assert.equal(calculator.sub(5,2),5)
        })
    })

    // Multiplication Test
    describe('Multiplication Test', () => {

        // mul(5, 2) expected result 10 PASS
        it('multiplying 5 * 2, expected result 10. (Intended to PASS)', () => {
            assert.equal(calculator.mul(5,2),10)
        })

        // mul(5,2) expected result 12 FAIL
        it('multiplying 5 * 2, expected result 12. (Intended to FAIL)', () => {
            assert.equal(calculator.mul(5,2),12)
        })
    })

    // Division Test
    describe('Division Test', () => {

        // div(10, 2) expected result 5 PASS
        it('dividing 10 / 2, expected result 5. (Intended to PASS)', () => {
            assert.equal(calculator.div(10,2),5)
        })

        // div(10,2) expected result 2 FAIL
        it('dividing 10 / 2, expected result 2. (Intended to FAIL)', () => {
            assert.equal(calculator.div(10,2),2)
        })
    })
})