class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
// Defines a Circle class that extends Shape and renders an SVG Circle.
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
  }
}
// Defines a Square class that extends Shape and renders an SVG Square.
class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
  }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon).
class Triangle extends Shape {
  render() {
    //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
  }
}

module.exports = { Circle, Square, Triangle };
