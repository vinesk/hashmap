const LinkedList = require('../src/LinkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('size returns the total number of nodes in the list', () => {
    list.append('value1');
    list.append('value2');
    expect(list.size()).toBe(2);
  });

  test('head returns the first node in the list', () => {
    list.append('value1');
    list.append('value2');
    expect(list.head().value).toBe('value1');
  });

  test('tail returns the last node in the list', () => {
    list.append('value1');
    list.append('value2');
    expect(list.tail().value).toBe('value2');
  });

  test('at returns the node at the given index', () => {
    list.append('value1');
    list.append('value2');
    list.append('value3');
    expect(list.at(1).value).toBe('value2');
  });

  test('pop removes the last element from the list', () => {
    list.append('value1');
    list.append('value2');
    list.pop();
    expect(list.toString()).toBe('( value1 ) -> null');
  });

  test('contains returns true if the value is in the list', () => {
    list.append('value1');
    list.append('value2');
    expect(list.contains('value2')).toBe(true);
    expect(list.contains('value3')).toBe(false);
  });

  test('find returns the index of the value in the list', () => {
    list.append('value1');
    list.append('value2');
    expect(list.find('value2')).toBe(1);
    expect(list.find('value3')).toBe(null);
  });

  test('toString represents the LinkedList as a string', () => {
    list.append('value1');
    list.append('value2');
    expect(list.toString()).toBe('( value1 ) -> ( value2 ) -> null');
  });

  test('insertAt inserts a new node at the given index', () => {
    list.append('value1');
    list.append('value3');
    list.insertAt('value2', 1);
    expect(list.toString()).toBe(
      '( value1 ) -> ( value2 ) -> ( value3 ) -> null'
    );
  });

  test('removeAt removes the node at the given index', () => {
    list.append('value1');
    list.append('value2');
    list.append('value3');
    list.removeAt(1);
    expect(list.toString()).toBe('( value1 ) -> ( value3 ) -> null');
  });
});
