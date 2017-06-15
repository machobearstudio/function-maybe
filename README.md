# function-maybe
Lift your function into maybe

## Motivation
Clean up your code by ensuring that function arguments will never be undefined

```javascript
// Turn this:
function toUpper(string) {
    if (string === undefined) {
        return undefined
    }

    return string.toUpperCase()
}

// Into this:
const toUpper = maybe(string => string.toUpperCase())
```

## Installation

```
npm install function-maybe
```

## Examples

```javascript
import maybe from 'function-maybe'

const toUpper = maybe(string => string.toUpperCase())
console.log(toUpper('doge')) // => DOGE
console.log(toUpper(undefined)) // => undefined

const join = separator => maybe(list => list.join(separator))
const format = pipe(join(','), toUpper)

console.log(format(['doge', 'such', 'wow!'])) // => DOGE,SUCH,WOW!
console.log(format(undefined)) // => undefined
```

## Testing
```
npm test
```
