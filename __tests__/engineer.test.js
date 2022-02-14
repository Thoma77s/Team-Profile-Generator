const engineer = require('../lib/engineer');

test("can set github via constructor", () => {
  const testValue = 'foobar';
  const e = new engineer('foo', '1', 'test@test', testValue);
  expect(e.github).toBe(testValue); 
});

test("getRole should return intern", () => {
  const testValue = 'engineer';
  const e = new engineer('foo', '1', 'test@test', 'foobar')
  expect(e.getRole()).toBe(testValue);
});

test("can getGithub return github", () => {
  const testValue = 'foobar';
  const e = new engineer('foo', '1', 'test@test', testValue);
  expect(e.getGithub()).toBe(testValue);
});