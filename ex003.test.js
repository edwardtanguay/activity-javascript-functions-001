const { expect } = require('@jest/globals');
const { isPlainObject, makePairs, without, isEmpty, isEqualDeep } = require('./ex003');

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
	expect(makePairs({ a: 1, b: 2 })).toStrictEqual([['a', 1], ['b', 2]]);
	expect(makePairs({ a: 1, ok: 2, name: 'Georg' })).toStrictEqual([['a', 1], ['ok', 2], ['name', 'Georg']]);
	expect(makePairs({})).toStrictEqual([]);
	expect(makePairs(null)).toStrictEqual([]);
	expect(makePairs([])).toStrictEqual([]);
	expect(makePairs([1,2,3])).toStrictEqual([]);
	expect(makePairs(false)).toStrictEqual([]);
	expect(makePairs(true)).toStrictEqual([]);
});

test('without() is correctly implemented', () => {
	expect(without({ a: 1, b: 2 }, 'b')).toStrictEqual({ a: 1 });
	expect(without({ a: 1, b: 2 }, 'a')).toStrictEqual({ b: 2 });
	expect(without({ a: 1, b: 2 }, 'c')).toStrictEqual({ a: 1, b: 2 });
});

test('isEmpty() is correctly implemented', () => {
	expect(isEmpty({ a: 1, b: undefined })).toBe(false);
	expect(isEmpty({})).toBe(true);
});

test('isEqualDeep() is correctly implemented', () => {
	expect(isEqualDeep({ a: 1, b: { c: 1 } },{ a: 1, b: { c: 1 } })).toBe(true);
	expect(isEqualDeep({ a: 1, b: { c: 1 } },{ a: 1, b: { c: 2 } })).toBe(false);
});