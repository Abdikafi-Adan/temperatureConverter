// Temperature Converter

//  2 Input variables One For The Temperature And The Other Is For unit/ C or F.
function convertTemperature(temp, unit) {
  // 1 Variable To Calculate And Store The Value Form The 2 Input
  let convertedTemp;

  // if else To Check That A Valid Unit Is Enter And Calcuate The Temperature to Converted it.
  if (unit === "C") {
    convertedTemp = (temp * 9) / 5 + 32;

    console.log(`The Temperature is ${convertedTemp} in Fahrenheit`);
  } else if (unit === "F") {
    convertedTemp = ((temp - 32) * 5) / 9;

    console.log(`The Temperature is ${convertedTemp} in Celsius`);
  } else {
    console.log("Invalid Unit Please Enter Only C or F");
  }

  // Returing The Calculated and Converted Temperature
  return convertedTemp;
}
// Converted to Fahrenheit: 37.65 °F
convertTemperature(3.1415926535, "C");
// Converted to Celsius: 5.56 °C
convertTemperature(42, "F");
