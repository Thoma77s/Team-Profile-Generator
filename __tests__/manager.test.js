const Manager = require('../lib/manager');

test("can set officeNumber via constructor", () => {
  const testValue = '100';
  const e = new Manager('foo', '1', 'test@test', testValue);
  expect(e.officeNumber).toBe(testValue); 
});

test("getRole should return manager", () => {
  const testValue = 'Manager';
  const e = new Manager('foo', '1', 'test@test', '100')
  expect(e.getRole()).toBe(testValue);
});

test("can getOfficeNumber return officeNumber", () => {
  const testValue = '100';
  const e = new Manager('foo', '1', 'test@test', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});