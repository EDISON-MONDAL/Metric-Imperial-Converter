function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    if( input.match(/\d+\.\d+|\d+\/\d+|\d+/) ){ 

      if(input.match(/(\d+\/\d+\/\d+)|(\d+\/\d+\.\d+\/\d+)/)){ // more than one fraction 1/2/3  of 1/2.2/3
        result = NaN
      }
      else if(input.match(/\d+\.\d+\/\d+|\d+\/\d+/)){ // 1.2/3 | 2/3

        if(input.match(/\d+\.\d+\/\d+/)){ // 1.2/3

          const fraction = input.match(/\d+\.\d+\/\d+/)
          const nominator = fraction[0].slice(0, fraction[0].indexOf("/"))
          const dnominator = fraction[0].slice(fraction[0].indexOf("/")+1)
          return nominator / dnominator

        }else {
          const fraction = input.match(/\d+\/\d+/)
          const nominator = fraction[0].slice(0, fraction[0].indexOf("/"))
          const dnominator = fraction[0].slice(fraction[0].indexOf("/")+1)
          return nominator / dnominator
        }
      } else if(input.match(/\d+\.\d+|\d+/)){
        result = Number(input.match(/\d+\.\d+|\d+\/\d+|\d+/))
      } else {
        result = NaN
      }
      
    }
    else {
      result = 1
    }
    

    
    
    return result;
  };

  
  this.getUnit = function(input) {
    let result;
    
    if(!input){
      result = 'invalid unit'
    }
    else if( input.match(/(\d+\.\d+|\d+\/\d+|\d+)+(gal|GAL|l|L|mi|MI|km|KM|lbs|LBS|kg|KG)/) ){ 
      
      const data = input.match(/gal|GAL|l|L|mi|MI|km|KM|lbs|LBS|kg|KG/)[0]   
      if(data == 'l' || data == 'L'){
        result = data.toUpperCase()
      } else {
        result = data.toLowerCase()
      }
      
    } else if( input=="gal" || input=="GAL" || input=="l" || input=="L" || input=="mi" || input=="MI" || input=="km" || input=="KM" || input=="lbs" || input=="LBS" || input=="kg" ||  input=="KG" ){
      
      if( input == 'l' || input == 'L'){
        result = input.toUpperCase()
      } else {
        result = input.toLowerCase()
      }
      
      
    } else {
      result = 'invalid unit'
    }

    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    if( initUnit=="gal" || initUnit=="GAL" ){
      result = 'L'
    } else if( initUnit=="l" || initUnit=="L" ){
      result = 'gal'
    } else if( initUnit=="mi" || initUnit=="MI"  ){
      result = 'km'
    } else if ( initUnit=="km" || initUnit=="KM" ){
      result = 'mi'
    } else if ( initUnit=="lbs" || initUnit=="LBS" ){
      result = 'kg'
    } else if( initUnit=="kg" ||  initUnit=="KG" ){
      result = 'lbs'
    }
        
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    if( unit=="gal" || unit=="GAL" ){
      result = 'gallons'
    } else if( unit=="l" || unit=="L" ){
      result = 'liters'
    } else if( unit=="mi" || unit=="MI"  ){
      result = 'miles'
    } else if ( unit=="km" || unit=="KM" ){
      result = 'kilometers'
    } else if ( unit=="lbs" || unit=="LBS" ){
      result = 'pounds'
    } else if( unit=="kg" ||  unit=="KG" ){
      result = 'kilograms'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const initNumParsed = Number(initNum)

    const galToL = 3.78541;
    //const LTogal = 0.26417;
    const lbsToKg = 0.453592;
    //const kgTolbs = 2.20462;
    const miToKm = 1.60934;
    //const kmTomi = 0.62137;
    let result;

    // check tolerance
    function areNumbersEqualWithTolerance(a, b, tolerance) {
      return Math.abs(a - b) <= tolerance;
    }




    if( initUnit=="gal" || initUnit=="GAL" ){
      result = galToL * initNum

      
      /*
      const num1 = result
      const num2 = Math.round(result);
      
      const tolerance = 0.01; // Define your desired tolerance here
      
      if (areNumbersEqualWithTolerance(num1, num2, tolerance)) {
        // The numbers are considered equal within the tolerance
        result = Math.round(result)
      } // The numbers are not considered equal within the tolerance
      */

    } else if( initUnit=="l" || initUnit=="L" ){
      result = initNum / galToL
    } else if( initUnit=="mi" || initUnit=="MI"  ){
      result = miToKm * initNum
    } else if ( initUnit=="km" || initUnit=="KM" ){
      result = initNum / miToKm
    } else if ( initUnit=="lbs" || initUnit=="LBS" ){
      result = lbsToKg * initNum
    } else if( initUnit=="kg" ||  initUnit=="KG" ){
      result = initNum / lbsToKg
    }
    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    //result = {initNum, initUnit, returnNum, returnUnit}
    
    return result;
  };
  
}

module.exports = ConvertHandler;
