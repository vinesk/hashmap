const HashSet = require('../src/HashSet');

describe('HashSet', () => {
  let hashSet;

  beforeEach(() => {
    hashSet = new HashSet();
  });

  test('add and has', () => {
    hashSet.add('key1');
    hashSet.add('key2');
    expect(hashSet.has('key1')).toBe(true);
    expect(hashSet.has('key2')).toBe(true);
    expect(hashSet.has('nonexistentKey')).toBe(false);
  });

  test('remove', () => {
    hashSet.add('key1');
    hashSet.add('key2');
    hashSet.remove('key1');
    expect(hashSet.has('key1')).toBe(false);
    expect(hashSet.has('key2')).toBe(true);
  });

  test('length', () => {
    hashSet.add('key1');
    hashSet.add('key2');
    expect(hashSet.length()).toBe(2);
  });

  test('clear', () => {
    hashSet.add('key1');
    hashSet.add('key2');
    hashSet.clear();
    expect(hashSet.length()).toBe(0);
  });

  test('keys', () => {
    hashSet.add('key1');
    hashSet.add('key2');
    expect(hashSet.keys()).toEqual(['key1', 'key2']);
  });
});
