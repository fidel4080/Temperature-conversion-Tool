//Declare all the variables
const tempInput = document.getElementById("tempInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

//Function property
function convert(){
   if(toFahrenheit.checked){
       temp = Number(tempInput.value);
       temp = temp * 9 / 5 + 32;
       result.textContent = temp.toFixed(2) + "°F"
       result.style.color = "green"
   }

   else if(toCelsius.checked){
       temp = Number(tempInput.value);
       temp = (temp - 32) * (5 / 9);
       result.textContent = temp.toFixed(2) + "°C"
       result.style.color = "green"
   }

   else{
       result.textContent = "🤦‍♂️🤦‍♂️SELECT A UNIT!!"
       result.style.color = "red"
   }
}