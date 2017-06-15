var maybe = require('./index')

test('Maybe it works with single argument functions', () => {
  const f = maybe(x => x.toUpperCase())

  expect(f('doge')).toEqual('DOGE')

  expect(f(undefined)).toBeUndefined()
  expect(f()).toBeUndefined()
})

test('Maybe it works with multiple arguments', () => {
  const f = maybe((x, y) => x * y)

  expect(f(3, 2)).toEqual(6)

  expect(f(undefined, undefined)).toBeUndefined()
  expect(f(undefined, 1)).toBeUndefined()
  expect(f(100)).toBeUndefined()
  expect(f()).toBeUndefined()
})

test('Maybe it works with nested functions', () => {
  const toUpper = maybe(x => x.toUpperCase())
  const repeat = maybe((count, string) => string.repeat(count))

  expect(repeat(2, toUpper('doge'))).toEqual('DOGEDOGE')
  expect(repeat(2, toUpper(undefined))).toBeUndefined()
  expect(repeat(2, toUpper())).toBeUndefined()

  expect(repeat(undefined, toUpper('doge'))).toBeUndefined()
})
