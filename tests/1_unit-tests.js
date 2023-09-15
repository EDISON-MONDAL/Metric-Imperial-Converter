const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {

  suite("ConvertHandler functions test", function () {

    test("Whole number input", function (done) {
      let input = "5L";
      assert.equal(convertHandler.getNum(input), 5);
      done();
    });

    test("Invalid input (double fraction)", function (done) {
      let input = "4/3.1/7kg";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test("Decimal Input", function (done) {
      let input = "5.2gal";
      assert.equal(convertHandler.getNum(input), 5.2);
      done();
    });

    test("Fractional Input", function (done) {
      let input = "7/5mi";
      assert.equal(convertHandler.getNum(input), 7/5);
      done();
    });

    test("Fractional input with decimal", function (done) {
      let input = "7/1.4mi";
      assert.equal(convertHandler.getNum(input), 7/1.4);
      done();
    });

    test("No numeric input", function (done) {
      let input = "lbs";
      assert.equal(convertHandler.getNum(input), 1);
      assert.equal(convertHandler.getUnit(input), "lbs");
      done();
    });

  });

  suite("Function ConvertHandler.getUnit(input)", function () {

    test("For each valid inputs", function (done) {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];

      let output = [
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
      ];

      input.forEach(function (unit, index) {
        assert.equal(convertHandler.getUnit(unit), output[index]);
      });
      done();
    });

    test("Unknown unit input", function (done) {
      let input = "5g";
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function () {
    test("For each valid inputs", function (done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (unit, i) {
        assert.equal(convertHandler.getReturnUnit(unit), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function () {
    test("For each valid inputs", function (done) {
      let input = ["gal", "l", "lbs", "kg", "mi", "km"];
      let expect = [
        "gallons",
        "liters",
        "pounds",
        "kilograms",
        "miles",
        "kilometers",
      ];
      input.forEach(function (unit, i) {
        assert.equal(convertHandler.spellOutUnit(unit), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function () {
    test("gal to L", function (done) {
      let input = [4, "gal"];
      let expect = 15.14164;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });

    test("L to gal", function (done) {
      let input = [4, "l"];
      let expect = 1.056688;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });

    test("mi to km", function (done) {
      let input = [4, "mi"];
      let expect = 6.437376;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });

    test("km to mi", function (done) {
      let input = [4, "km"];
      let expect = 2.485485;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });

    test("lbs to kg", function (done) {
      let input = [4, "lbs"];
      let expect = 1.814369;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });

    test("kg to lbs", function (done) {
      let input = [4, "kg"];
      let expect = 8.81849;
      assert.approximately(
        convertHandler.convert(input[0], input[1]), expect, 0.1
      );
      done();
    });
  });
});
