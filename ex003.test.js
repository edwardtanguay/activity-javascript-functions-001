const { expect } = require('@jest/globals');
const { isPlainObject, makePairs } = require('./ex003');

test('isPlainObject() is correctly implemented', () => {
	expect(isPlainObject('aaaaaaaaa')).toBe(false);
	expect(isPlainObject([])).toBe(false);
	expect(isPlainObject(123)).toBe(false);
	expect(isPlainObject({ name: 'ok' })).toBe(true);
	expect(isPlainObject(false)).toBe(false);
	expect(isPlainObject(true)).toBe(false);
	expect(isPlainObject(undefined)).toBe(false);
	expect(isPlainObject(null)).toBe(false);
});

test('makePairs() is correctly implemented', () => {
	expect(makePairs({ a: 1, b: 2 })).toBe([['a', 1], ['b', 2]]);
});