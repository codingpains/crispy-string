var digits = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvxuyz';
var uppercase = lowercase.toUpperCase();
var special = '+/';

var base64Chars;
var base62Chars;
var base32Chars;
var generate;

module.exports = exports = {};

base10Chars = function() {
  return digits;
};

base16Chars = function() {
  return [digits, uppercase.substr(0, 6)].join('');
};

base32Chars = function() {
  return [uppercase, digits].join('')
};

base62Chars = function() {
  return [digits, lowercase, uppercase].join('');
};

base64Chars = function() {
  return [digits, lowercase, uppercase, special].join('');
};

generate = function (pool, length) {
  var output = '';
  var max = pool.length - 1;
  var i;

  for(i = 0; i < length; i += 1) {
    output += pool[Math.round(Math.random() * max)];
  }

  return output;
};

exports.base64String = function(length) {
  return generate(base64Chars(), length);
};

exports.base62String = function(length) {
  return generate(base62Chars(), length);
};

exports.base32String = function(length) {
  return generate(base32Chars(), length);
};

exports.base16String = function(length) {
  return generate(base16Chars(), length);
};

exports.base10String = function(length) {
  return generate(base10Chars(), length);
};
