const HashMap = require('../src/HashMap');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test('length returns the number of stored keys in the hash map', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    expect(hashMap.length()).toBe(2);
  });

  test('clear removes all entries in the hash map', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    hashMap.clear();
    expect(hashMap.length()).toBe(0);
  });

  test('keys returns an array containing all the keys inside the hash map', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    expect(hashMap.keys()).toEqual(['key1', 'key2']);
  });

  test('values returns an array containing all the values inside the hash map', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    expect(hashMap.values()).toEqual(['value1', 'value2']);
  });

  test('entries returns an array containing each key, value pair', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    expect(hashMap.entries()).toEqual([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]);
  });
});
