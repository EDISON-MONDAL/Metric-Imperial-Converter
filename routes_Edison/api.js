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


    
    if(unit == 'invalid unit' && num == 'invalid number' ){
      console.log(num + ' ok num ' + unit + ' ok unit')
      res.send('invalid number and unit');
      //res.status(400).json({ error: 'invalid number and unit' });
    }
    else if( num == 'invalid number' ){      
      console.log(num + ' ok num')
      res.send('invalid number');
      //res.status(400).json({ error: 'invalid number' });
    }
    else if( unit == 'invalid unit'){
      console.log(unit + ' ok unit')
      
      res.send('invalid unit');
      
      //res.status(400).json({error: 'invalid unit' })
      
    }
     else {
      
      console.log('return '+ returnNum)

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
