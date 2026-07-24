const { generateSvg } = require("./index");

test("generateSvg outputs valid svg with provided values", () => {
  const svg = generateSvg({
    text: "ABC",
    textColor: "white",
    shape: "circle",
    shapeColor: "blue",
  });

  expect(svg).toContain("<svg");
  expect(svg).toContain("<circle");
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain(">ABC<");
});
