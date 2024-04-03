const Node = require('../src/Node');

describe('Node', () => {
  it('should create a node with value and next', () => {
    const node = new Node(5);
    expect(node.value).toBe(5);
    expect(node.next).toBeNull();
  });
});
