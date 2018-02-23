# pretty-ms-ja [![Build Status](https://travis-ci.org/akameco/pretty-ms-ja.svg?branch=master)](https://travis-ci.org/akameco/pretty-ms-ja)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/pretty-ms-ja.svg)](https://greenkeeper.io/)

> convert ms to human readable string for Japanese: 1337000000 => 15日11時間23分20秒


## Install

```
$ npm install --save pretty-ms-ja
```


## Usage

```js
const prettyMsJa = require('pretty-ms-ja');

prettyMsJa(1337000000);
//=> '15日11時間23分20秒'
```


## API

### prettyMsJa(milliseconds, [options])

#### milliseconds

Type: `number`

Milliseconds to humanize for Japanese.

#### options

##### split

Type: `String`<br>
Default: `''`

```js
prettyMsJa(67000);
// => 1時間7分

prettyMsJa(67000, {split: ' '});
// => 1時間 7分
```

## License

MIT © [akameco](http://akameco.github.io)
