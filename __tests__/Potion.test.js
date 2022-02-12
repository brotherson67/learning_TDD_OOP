const Potion = require("../lib/Potion");

test("Creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});


// Always want to run test before writing program to make sure that any previous code doesn't pass
test("Creates random Potion Object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
