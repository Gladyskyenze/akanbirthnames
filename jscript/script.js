let userData= document.querySelector("form");

let maleNames=[ "Kwasi", "Kwadwo", "Kwabena"," Kwaku", "Yaw"," Kofi", "Kwame"]
let femaleNames=[" Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]


userData.addEventListener("submit", (event)=>{
  event.preventDefault();
  let DD=userData.date.value;
  let MM=userData.month.value;
  let year=userData.year.value;
  let CC= year.substring(0,2);
  let YY=year.substring(2);
  let gender=userData.gender.value

  d = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
  
  if (gender=="male") {
    userData.style.display=="none"
    document.querySelector("#result").textContent="Your Akan name is: " + maleNames[d];
    
  } else {
    userData.style.display=="none"
    document.querySelector("#result").textContent="Your Akan name is: " + femaleNames[d];
    
  }
  






})