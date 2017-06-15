function isUndefined(x) {
  return x === undefined
}

function maybe(func) {
  return function () {
    var args = [].slice.call(arguments, 0)

    if (args.length < func.length
     || args.filter(isUndefined).length > 0) {
      return undefined
    }

    return func.apply(undefined, args)
  }
}

module.exports = maybe
