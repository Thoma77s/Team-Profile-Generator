const manager = require('../lib/manager');

test("can set officeNumber via constructor", () => {
  const testValue = '100';
  const e = new manager('foo', '1', 'test@test', testValue);
  expect(e.officeNumber).toBe(testValue); 
});

test("getRole should return manager", () => {
  const testValue = 'manager';
  const e = new manager('foo', '1', 'test@test', '100')
  expect(e.getRole()).toBe(testValue);
});

test("can getOfficeNumber return officeNumber", () => {
  const testValue = '100';
  const e = new manager('foo', '1', 'test@test', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});