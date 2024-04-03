const Node = require('../src/Node');

describe('Node', () => {
  test('constructor sets value and next to null', () => {
    const node = new Node('test');
    expect(node.value).toBe('test');
    expect(node.next).toBe(null);
  });
});
