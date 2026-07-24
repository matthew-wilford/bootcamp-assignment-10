const { Triangle, Circle, Square } = require("./shapes");

describe("Shape classes", () => {
  test("Triangle.render() returns the correct SVG string", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toBe(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />',
    );
  });

  test("Circle.render() returns the correct SVG string", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toBe(
      '<circle cx="150" cy="100" r="80" fill="green" />',
    );
  });

  test("Square.render() returns the correct SVG string", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toBe(
      '<rect x="90" y="40" width="120" height="120" fill="red" />',
    );
  });
});
