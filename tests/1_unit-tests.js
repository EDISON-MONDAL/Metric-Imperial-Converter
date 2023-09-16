const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('Whole number input', function(done) {
    assert.strictEqual(convertHandler.getNum('42'), 42);
    done();
  });

  test('Decimal number input', function(done) {
    assert.approximately(convertHandler.getNum('3.14'), 3.14, 0.01);
    done();
  });

  test('Fractional input', function(done) {
    assert.strictEqual(convertHandler.getNum('1/2'), 0.5);
    done();
  });

  test('Fractional input with a decimal', function(done) {
    assert.approximately(convertHandler.getNum('2.5/2'), 1.25, 0.01);
    done();
  });

  test('Double-fraction input (error)', function(done) {
    //assert.isNaN(convertHandler.getNum('3/2/3'));
    assert.strictEqual(convertHandler.getNum('3/2/3'), 'invalid number');
    done();
  });

  test('No numerical input provided (default to 1)', function(done) {
    assert.strictEqual(convertHandler.getNum(''), 1);
    done();
  });

  test('Valid input unit', function(done) {
    assert.strictEqual(convertHandler.getUnit('gal'), 'gal');
    done();
  });

  test('Invalid input unit (error)', function(done) {
    assert.strictEqual(convertHandler.getUnit('invalid'), 'invalid unit');
    done();
  });

  test('Return unit for valid input unit (gal to L)', function(done) {
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
    done();
  });

  test('Spelled-out string unit for valid input unit (gal)', function(done) {
    assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
    done();
  });

  test('Convert gal to L', function(done) {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.01);
    done();
  });

  test('Convert L to gal', function(done) {
    assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.01);
    done();
  });

  test('Convert mi to km', function(done) {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.01);
    done();
  });

  test('Convert km to mi', function(done) {
    assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.01);
    done();
  });

  test('Convert lbs to kg', function(done) {
    assert.approximately(convertHandler.convert(1, 'lbs'), 0.45359, 0.01);
    done();
  });

  test('Convert kg to lbs', function(done) {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.01);
    done();
  });
});
