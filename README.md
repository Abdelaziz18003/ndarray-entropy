# ndarray-entropy

Calculate the entropy of an intensity image, inspired by Matlab "entropy" function.

## Usage

```js
const entropy = require('ndarray-entropy');
const getPixels = require('get-pixels');

getPixels('nature.png', (err, img) => {
  if (!err && img) {
    console.log(entropy(img));
    // > 7.140717410116984
  }
})
```
