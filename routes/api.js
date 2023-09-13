'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  // Define a route for the '/api/convert' endpoint
  app.get('/api/convert', (req, res) => {
    // You can access the query parameters using req.query
    const input = req.query.input;
    
    // Implement your conversion logic using the ConvertHandler here
    // For example:
    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(num, unit);
    const returnUnit = convertHandler.getReturnUnit(unit);
    const string = convertHandler.getString(num, unit, returnNum, returnUnit);


    if( unit == 'invalid unit'){
      const error = new Error('invalid unit');
      error.stack = 'Error thrown from my code';

      res.send(error.message)
      
    } else if(num == NaN){      
      const error = new Error('invalid number');
      error.stack = 'Error thrown from my code';

      res.send(error.message)
    }else {
  

      // Prepare the response JSON
      const response = {
        initNum: num,
        initUnit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string,
      };

      // Send the JSON response
      res.json(response);
    }
  
    
  });
  

};
