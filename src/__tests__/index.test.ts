import cs from "../index";

test("basic", () => {
  expect(cs({ backgroundColor: "red" })).toStrictEqual([
    { backgroundColor: "red" },
  ]);
});

test("conditional", () => {
  expect(cs([{ backgroundColor: "red" }, true])).toStrictEqual([
    { backgroundColor: "red" },
  ]);
  expect(cs([{ backgroundColor: "red" }, false])).toStrictEqual([]);
});

test("array and conditional", () => {
  expect(
    cs({ color: "red" }, [{ backgroundColor: "red" }, true])
  ).toStrictEqual([{ color: "red" }, { backgroundColor: "red" }]);

  expect(
    cs({ color: "red" }, [{ backgroundColor: "red" }, false])
  ).toStrictEqual([{ color: "red" }]);
});

test("complex", () => {
  expect(
    cs(
      { backgroundColor: "red" },
      { color: "red" },
      [{ display: "none" }, false],
      [{ display: "flex" }, true]
    )
  ).toStrictEqual([
    { backgroundColor: "red" },
    { color: "red" },
    { display: "flex" },
  ]);
});
