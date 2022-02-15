const Intern = require('../lib/intern');

test("can set school via constructor", () => {
  const testValue = 'UCLA';
  const e = new Intern('foo', '1', 'test@test', testValue);
  expect(e.school).toBe(testValue); 
});

test("getRole should return intern", () => {
  const testValue = 'Intern';
  const e = new Intern('foo', '1', 'test@test', 'UCLA')
  expect(e.getRole()).toBe(testValue);
});

test("can getSchool return school", () => {
  const testValue = 'UCLA';
  const e = new Intern('foo', '1', 'test@test', testValue);
  expect(e.getSchool()).toBe(testValue);
});