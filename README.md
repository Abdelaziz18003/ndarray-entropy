# ndarray-entropy

Calculate the entropy of an intensity image, inspired by Matlab "entropy" function.

## Usage

### Syntax

```js
entropy(img [,options]);
```

### Options

Option  | required | default | description
------- | -------- | ------- | -----------
channel | no       | 0       | Select the RGB channel to calculate the entropy for. `0` for the red channel, `1` for the green and `2` for the blue one. If `img` is a 2D array, this option has no effect.

## Example

```js
const getPixels = require('get-pixels');
const entropy = require('ndarray-entropy');

getPixels('nature.png', (err, img) => {
  if (!err && img) {
    console.log(entropy(img));
    // > 7.140717410116984
  }
})
```
