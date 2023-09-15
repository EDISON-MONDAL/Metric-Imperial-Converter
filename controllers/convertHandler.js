function ConvertHandler() {

    function breakInp(inp){
      const inputText = inp.toLowerCase()  
      let num
      let str
      if(inputText.search("[a-zA-Z]") != -1){
        num = inputText.slice(0, inputText.search("[glmkGLML]"));
        str = inputText.slice(inputText.search("[glmkGLML]")); // for 5e2l scientific escape
      }else {
        num = inputText.slice(0);
      }
      
      console.log('nuuuuuuuummmmmmmmmm '+ num)
      
      // number
      const regex = /^(\.)?\d+(\.|\.\d+)?(\/\d+(\.|\.\d+)?)?$/; // /^(\.)?\d+(\.|(\.\d+)?)+(\/\d+(\.|\.\d+)?)?$/
      // 1.2/2.2 true
      // 2/2.2/2 false
      // 1/2/3 false
      // 1.2/2.2/2 false
      // .5 true
      // 5. true  
      // 5/5. true
      // 5/.5 false
      // 5.5. false 
      // 5./5. 
      // 5./5.5 false
      // 5./5 
      // 2.2. false
      // 2.2.2 false
      if(!num){
        num =  1
      }
      else if( num == 0){
        num = 'invalid number'
      }
      else if(regex.test(num) == true){ 
        if(/\d+\.\/\d+\./.test(num) == true || /\d+\.\/\d+/.test(num) == true || /\d+\/0/.test(num) == true || /0\/\d+/.test(num) == true){
  
          // 5./5. false
          // 5./5  false
          // 1/0 false
          // 0/1 false
  
          num = 'invalid number'
        }
        else if(num.indexOf("/") != -1){
          
          const nominator = num.slice(0, num.indexOf("/"))
          const dnominator = num.slice( num.indexOf("/")+1)
          num = Number(nominator /dnominator)
        } else{
          num = Number(num)
          
        }      
        
      } else {
        num = 'invalid number'
      }
  
  
  
      //string
      if(str != "gal" && str != "lbs" && str != "mi" && str != "km" && str != "kg" && str != "l"){
        str = 'invalid unit'
      }
  
      if( str == 'l'){
        str = 'L'
      }
      
        
      
  
      return [num, str] 
    }
  
  
    
    this.getNum = function(input) {
      
      let result = breakInp(input)[0];
      
          
      return result;
    };
  
    
    this.getUnit = function(input) {
      let result;
      result = breakInp(input)[1]
  
      //console.log('unit tttttt '+ result)
      
      
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
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;
  
      
      if( initUnit=="gal" || initUnit=="GAL" ){
        result = parseFloat((galToL * initNum).toFixed(5))
      } else if( initUnit=="l" || initUnit=="L" ){
        result = parseFloat((initNum / galToL).toFixed(5))
      } else if( initUnit=="mi" || initUnit=="MI"  ){
        result = parseFloat((miToKm * initNum).toFixed(5))
      } else if ( initUnit=="km" || initUnit=="KM" ){
        result = parseFloat((initNum / miToKm).toFixed(5))
      } else if ( initUnit=="lbs" || initUnit=="LBS" ){
        result = parseFloat((lbsToKg * initNum).toFixed(5))
      } else if( initUnit=="kg" ||  initUnit=="KG" ){
        result = parseFloat((initNum / lbsToKg).toFixed(5))
      }



      function areNumbersEqualWithTolerance(a, b, tolerance) {
        return Math.abs(a - b) <= tolerance;
    }
    
    const num1 = result;
    const num2 = Math.round(result)
    
    const tolerance = 0.01; // Define your desired tolerance here
    if (areNumbersEqualWithTolerance(num1, num2, tolerance)) {
        //console.log(`The numbers are considered equal within the tolerance of ${tolerance}`);
        result = Math.round(result)
    } else {
        //console.log(`The numbers are not considered equal within the tolerance of ${tolerance}`);
        result = result
    }


      return result;
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      let result;
  
      //result = {initNum, initUnit, returnNum, returnUnit}
      
      return result;
    };
    
  }
  
  module.exports = ConvertHandler;
  