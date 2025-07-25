function calculation(){

  let weight = (document.querySelector('.weightinput'));
  let height = (document.querySelector('.heightinput'));
  let output = (document.querySelector('.result'));
  let weightClassInput = weight.value;
  let heightClassInput = height.value;
  let conversionCm = (heightClassInput*2.54);
  let roundupCmVal = Math.floor(conversionCm);
  let meterSquare = ((roundupCmVal/100)**2)*100;
  let roundupSquareVal = Math.floor(meterSquare);
  let finalSquareVal = roundupSquareVal/100;
  let bmiResult = (weightClassInput/finalSquareVal)*100;
  let roundupBmiResult = Math.floor(bmiResult);
  let finalResult = roundupBmiResult/100;

  if(finalResult >= 1 && finalResult < 16.0 ){
    output.innerHTML = `Your BMI is ${finalResult} - SEVERELY UNDERWEIGHT.`;
  }
  else if (finalResult >= 16.0 && finalResult <= 16.9){
    output.innerHTML = `Your BMI is ${finalResult} - MODERATELY UNDERWEIGHT.`;
  }
  else if (finalResult >= 17.0 && finalResult <= 18.4){
    output.innerHTML = `your BMI is ${finalResult} - MILDLY UNDEREIGHT.`;
  }
  else if (finalResult >= 18.5 && finalResult <= 24.9){
    output.innerHTML =`your BMI is ${finalResult} - NORMAL (HEALTHY WEIGHT).`;
  }
  else if (finalResult >= 25.0 && finalResult <= 29.9){
    output.innerHTML =`your BMI is ${finalResult} - OVERWEIGHT.`;
  }
  else if (finalResult >= 30.0 && finalResult <= 34.9){
    output.innerHTML =`your BMI is ${finalResult} - OBESE CLASS 1 (Moderate).`;
  }
  else if (finalResult >= 35.0 && finalResult <= 39.9){
    output.innerHTML =`your BMI is ${finalResult} - OBESE CLASS 2 (severe).`;
  }
  else if (finalResult >= 40.0){
    output.innerHTML =`your BMI is ${finalResult} - OBESE CLASS 3 (EXTREME). OMG you are too much in risk JESUS.`;
  }
}

function keyFunction (e){
  if (e.key === 'Enter'){
    calculation();
  }
}

const lightBtn = document.querySelector('.togglebutton1');
const darkBtn = document.querySelector('.togglebutton2');

darkBtn.addEventListener ('click',()=> {
  document.body.classList.add ('dark-mode');
  localStorage.setItem ('theme', 'dark'); 
});
lightBtn.addEventListener ('click', ()=> {
  document.body.classList.remove ('dark-mode');
  localStorage.setItem ('theme', 'light');
});

if (localStorage.getItem('theme') === 'dark'){
  document.body.classList.add ('dark-mode');
}
