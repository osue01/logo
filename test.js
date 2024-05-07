const { Circle, Triangle, Square } = require("./design.js");

//test circle
describe("Circle", () => {
  test("renders circle", () => {
    const shape = new Circle();
    var color = "orange";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`
    );
  });
});

//test square
describe("Square", () => {
  test("renders square", () => {
    const shape = new Square();
    var color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${color}">`
    );
  });
});
//test triangle
describe("Triangle", () => {
  test("renders triangle", () => {
    const shape = new Triangle();
    var color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`
    );
  });
});
