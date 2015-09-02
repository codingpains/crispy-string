var test = require('tape');
var crispy = require('./../index');

test('should respect asked length', function(assert) {
  var expected = 8;
  var actual = crispy.base10String(8).length;
  assert.equal(actual, expected, 'return string length is correct');

  assert.end();
});

test('base10 should have only decimals', function(assert) {
  var matcher = /^\d+$/;
  var expected = true;
  var times = 64;
  var actual;
  var length;
  while(times) {
    times--;
    length = Math.round(Math.random() * 64) + 8;
    actual = matcher.test(crispy.base10String(length));
    assert.equal(actual, expected);
  }

  assert.end();
});

test('base16 should have only decimals and uppercase characters from A to F', function(assert) {
  var matcher = /^[0-9A-F]+$/;
  var expected = true;
  var times = 64;
  var actual;
  var length;
  while(times) {
    times--;
    length = Math.round(Math.random() * 64) + 8;
    actual = matcher.test(crispy.base16String(length));
    assert.equal(actual, expected);
  }

  assert.end();
});

test('base32 should have only decimals, uppercase characters', function(assert) {
  var matcher = /^[0-9A-Z]+$/;
  var expected = true;
  var times = 64;
  var actual;
  var length;

  while(times) {
    times--;
    length = Math.round(Math.random() * 64) + 8;
    actual = matcher.test(crispy.base32String(length));
    assert.equal(actual, expected);
  }

  assert.end();
});

test('base62 should have only decimals, lowercase and uppercase characters', function(assert) {
  var matcher = /^[0-9a-zA-Z]+$/;
  var expected = true;
  var times = 64;
  var actual;
  var length;
  while(times) {
    times--;
    length = Math.round(Math.random() * 64) + 8;
    actual = matcher.test(crispy.base62String(length));
    assert.equal(actual, expected);
  }

  assert.end();
});

test('base64 should have only decimals, lowercase, uppercase characters and the special characters +/', function(assert) {
  var matcher = /^[0-9a-zA-Z\+\/]+$/;
  var expected = true;
  var times = 64;
  var actual;
  var length;
  while(times) {
    times--;
    length = Math.round(Math.random() * 64) + 8;
    actual = matcher.test(crispy.base64String(length));
    assert.equal(actual, expected);
  }

  assert.end();
});
