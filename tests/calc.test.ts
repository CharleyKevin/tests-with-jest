import { add, multiply } from '../src/calc';

describe('Test CALC - add', () => {
  it('should return 15 for add(10,5)', () => {
    expect(add(10, 5)).toBe(15);
  });
  it('should return 12 for add(7,5)', () => {
    expect(add(7, 5)).toBe(12);
  });
});

describe('Test CALC - multiply', () => {
  it('should return 50 for multiply(10,5)', () => {
    expect(multiply(10, 5)).toBe(50);
  });
  it('should return 35 for multiply(7,5)', () => {
    expect(multiply(7, 5)).toBe(35);
  });
});
