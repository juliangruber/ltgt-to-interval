
# ltgt-to-interval

  Convert a levelup style ltgt object to an interval string.

  This is the counterpart to [interval-to-ltgt](https://npmjs.org/package/interval-to-ltgt).

## Example

```js
var toInterval = require('ltgt-to-interval');

toInterval({});                    // => ','
toInterval({ gt: 'a' });           // => '(a,'
toInterval({ gte: 'a' });          // => '[a,'
toInterval({ lt: 'b' });           // => ',b)'
toInterval({ lte: 'b' });          // => ',b]'
toInterval({ gt: 'a', lte: 'b' }); // => '(a,b]'
```

## Installation

```bash
$ npm install ltgt-to-interval
```

## API

### toInterval(ltgt)

  Render [levelup](https://npmjs.org/package/levelup) style `ltgt` object into an interval string.

## License

  MIT

