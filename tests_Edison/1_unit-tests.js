const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('Whole number input', function() {
    assert.strictEqual(convertHandler.getNum('42'), 42);
  });

  test('Decimal number input', function() {
    assert.approximately(convertHandler.getNum('3.14'), 3.14, 0.01);
  });

  test('Fractional input', function() {
    assert.strictEqual(convertHandler.getNum('1/2'), 0.5);
  });

  test('Fractional input with a decimal', function() {
    assert.approximately(convertHandler.getNum('2.5/2'), 1.25, 0.01);
  });

  test('Double-fraction input (error)', function() {
    //assert.isNaN(convertHandler.getNum('3/2/3'));
    assert.strictEqual(convertHandler.getNum('3/2/3'), 'invalid number');
  });

  test('No numerical input provided (default to 1)', function() {
    assert.strictEqual(convertHandler.getNum(''), 1);
  });

  test('Valid input unit', function() {
    assert.strictEqual(convertHandler.getUnit('gal'), 'gal');
  });

  test('Invalid input unit (error)', function() {
    assert.strictEqual(convertHandler.getUnit('invalid'), 'invalid unit');
  });

  test('Return unit for valid input unit (gal to L)', function() {
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
  });

  test('Spelled-out string unit for valid input unit (gal)', function() {
    assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
  });

  test('Convert gal to L', function() {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.01);
  });

  test('Convert L to gal', function() {
    assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.01);
  });

  test('Convert mi to km', function() {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.01);
  });

  test('Convert km to mi', function() {
    assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.01);
  });

  test('Convert lbs to kg', function() {
    assert.approximately(convertHandler.convert(1, 'lbs'), 0.45359, 0.01);
  });

  test('Convert kg to lbs', function() {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.01);
  });
});
