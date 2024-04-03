const LinkedList = require('../src/LinkedList');

describe('LinkedList', () => {
  it('should append node and print the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);

    const mockPrint = jest.spyOn(console, 'log');
    list.print();

    expect(mockPrint).toHaveBeenCalledWith(1);
    expect(mockPrint).toHaveBeenCalledWith(2);

    mockPrint.mockRestore();
  });
});
