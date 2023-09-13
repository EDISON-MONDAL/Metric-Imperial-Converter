function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    if( input.match(/\d+\.\d+|\d+\/\d+|\d+/) ){ 

      if(input.match(/\d+\/\d+\/\d+/)){ // more than one fraction 1/2/3
        return NaN
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
      }
      
    }
    else {
      result = 1
    }
    

    
    
    return result;
  };

  
  this.getUnit = function(input) {
    let result;
    
    if( !input ){
      result = 'invalid unit'
    }
    else if( input.match(/(\d+\.\d+|\d+\/\d+|\d+)+(gal|GAL|l|L|mi|MI|km|KM|lbs|LBS|kg|KG)/) ){ 
      /*
      const decimal = input.match(/\d+\.\d+/)[0]
      const fraction = input.match(/\d+\/\d+/)[0]
      const integer = input.match(/\d+/)[0]
      */

      result = input.match(/gal|GAL|l|L|mi|MI|km|KM|lbs|LBS|kg|KG/)[0]
      
    } else if( input=="gal" || input=="GAL" || input=="l" || input=="L" || input=="mi" || input=="MI" || input=="km" || input=="KM" || input=="lbs" || input=="LBS" || input=="kg" ||  input=="KG" ){
      result = input
    } else {
      result = 'invalid unit'
    }
    

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    //result = initUnit
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    //result = unit
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    //result = {initNum, initUnit}
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    //result = {initNum, initUnit, returnNum, returnUnit}
    
    return result;
  };
  
}

module.exports = ConvertHandler;
