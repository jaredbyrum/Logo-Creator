const { Triangle, Square, Circle } = require("./shapes.js");

// code taken from Challenge README
describe("Shape Tests", () => {
  describe("Triangle test", () => {
    it("Should return true for a green triangle", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
  });
  describe("Square test", () => {
    it("Should return true for a red square", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
    });
  }); 
  describe("Circle test", () => {
    it("Should return true for a yellow circle", () => {
      const shape = new Circle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="yellow" />');
    });
  });   
});