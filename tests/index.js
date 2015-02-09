var test = require('tape'),
    getStack = require('../'),
    path = require('path');

test('getStack Exists', function (t) {
    t.plan(2);
    t.ok(getStack, 'getStack Exists');
    t.equal(typeof getStack, 'function', 'getStack is an function');
});

test('getStack defaults', function (t) {
    t.plan(1);

    t.equal(getStack(), 'anonymous (' + __filename + ':14)', 'get correct stack info');
});

test('getStack different level', function (t) {
    t.plan(1);

    t.equal(getStack(1), 'anonymous (' + path.join(__dirname, '../', 'node_modules/tape/lib/test.js:62)'), 'get correct stack info');
});

test('getStack out of range level', function (t) {
    t.plan(1);

    t.equal(getStack(99999999), 'stack level 99999999 out of range.', 'corectly errored out of range');
});