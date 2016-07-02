var test = require('tape');
var filter = require('../../object-filter');
var compare = require('../../object-compare');

test('filter by key', function (t) {
  t.plan(1);
  var obj1 = {a1: 3, b1: 5, a2: 9};
  var result = filter(obj1, function (key, value) {
    return key[0] == 'a';
  });
  t.ok(compare(result, {a1: 3, a2: 9}));
});

test('filter by value', function (t) {
  t.plan(2);
  var obj = {a: 3, b: 5, c: 9};
  var result = filter(obj, function (key, value) {
    return value < 6;
  });
  t.ok(compare(result, {a: 3, b: 5}));
  var obj2 = {a: 3, b: 5, c: null};
  var result2 = filter(obj2, function (key, value) {
    return value;
  });
  t.ok(compare(result2, {a: 3, b: 5}));
});
