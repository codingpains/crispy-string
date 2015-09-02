# Crispy String
A simple tool that creates random base 10, 16, 32, 62 and 64 strings.
Very useful to give random ids to objects or to give a unique filename to
any uploaded file when you just want it to be unique and sanitized.

## Installing.

```
 npm install crispy-string
```

## Basic example.
Creating a string with just decimals and a length of 8 characters is as simple as:

```js
  var crispy = require('crispy-string');

  crispy.base10String(8);
```

## Methods.

#### base10String(length)

Creates a random decimal string

**Character pool:** Digits

```js
  crispy.base10String(8); // => '98145208'
```

#### base16String(length)

Creates a random hexadecimal string

**Character pool:** Digits, Uppercase A to F

```js
  crispy.base16String(8); // => 'A81FB209'
```

#### base32String(length)

Creates a random base 32 string:

**Character pool:** Digits, Uppercase A to Z

```js
  crispy.base32String(8); // => 'a81Fb2cz'
```

#### base62String(length)

Creates a random base 62 string

**Character pool:** Digits, Uppercase A to Z and Lowercase a to z

```js
  crispy.base62String(8); // => 'ab82dE0X'
```

#### base64String(length)

Creates a random base 64 string

**Character pool:** Digits, Uppercase A to Z, Lowercase a to z, + and /

```js
  crispy.base64String(8); // => 'x8/dFB0+'
```
