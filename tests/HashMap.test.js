const HashMap = require('../src/HashMap');

describe('HashMap', () => {
  it('should set and get a value', () => {
    const hashMap = new HashMap();
    hashMap.set('key1', 'value1');
    expect(hashMap.get('key1')).toBe('value1');
  });

  it('should handle collisions', () => {
    const hashMap = new HashMap(1);
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');

    expect(hashMap.get('key1')).toBe('value1');
    expect(hashMap.get('key2')).toBe('value2');
  });
});
