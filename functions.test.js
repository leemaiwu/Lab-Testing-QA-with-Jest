const { returnTwo,
        greeting,
        add,
        multiply,
        divide,
        subtract
    } = require('./functions.js')

test('returnTwo should return the number 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting should return a string greeting the inputed name', () => {
    expect(greeting('James')).toEqual('Hello, James')
})

test('add should return the sum of two inputed numbers', () => {
    expect(add(1, 2)).toEqual(3)
})

test('multiply should give the product of two inputed numbers', () => {
    expect(multiply(2, 2)).toEqual(4)
})

test('divide should return num1 divided by num2', () => {
    expect(divide(4, 4)).toEqual(1)
})

test('subtract should give the difference', () => {
    expect(subtract(2, 2)).toEqual(0)
})