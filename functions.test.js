const { returnTwo,
        greeting,
        add,
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
