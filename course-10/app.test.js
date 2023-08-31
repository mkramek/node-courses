const app = require("./app");

describe("Test aplikacji obliczeniowej", () => {
  beforeAll(() => {
    console.log("Rozpoczęcie zestawu testów");
  });

  afterAll(() => {
    console.log("Zakończono zestaw testów");
  });

  beforeEach(() => {
    console.log("Rozpoczęcie testu");
  });

  afterEach(() => {
    console.log("Zakończenie testu");
  });

  test("1 plus 2 powinno równać się 3", () => {
    console.log("1 plus 2 powinno równać się 3");
    expect(app.add(1, 2)).toBe(3);
  });

  test("1 plus a powinno zwrócić null", () => {
    console.log('1 plus "a" powinno zwrócić null');
    expect(app.add(1, "a")).toBeNull();
  });

  test("5 minus 3 powinno równać się 2", () => {
    console.log("5 minus 3 powinno równać się 2");
    expect(app.subtract(5, 3)).toBe(2);
  });

  test("3 razy 4 powinno równać się 12", () => {
    console.log("3 razy 4 powinno równać się 12");
    expect(app.multiply(3, 4)).toBe(12);
  });

  test("49 podzielone przez 7 powinno równać się 7", () => {
    console.log("49 podzielone przez 7 powinno równać się 7");
    expect(app.divide(49, 7)).toBe(7);
  });

  test("2 do potęgi 10 powinno równać się 1024", () => {
    console.log("2 do potęgi 10 powinno równać się 1024");
    expect(app.power(2, 10)).toBe(1024);
  });

  test("0.1 plus 0.2 powinno równać się 0.3", () => {
    console.log("0.1 plus 0.2 powinno równać się 0.3");
    expect(app.add(0.1, 0.2)).toBe(0.3);
  });
});
