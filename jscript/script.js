let year =document.getElementById("year");
let month =document.getElementById("month");
let day =document.getElementById("day");
let result =document.getElementById("result");


function displaynames()
{
  let dates = new Date(year.value, month.value,day.value);
  let dayy= dates.getDay();
  let txt = "";
  switch(dayy)
  {case 0:result.innerHTML="Sunday" ; break;
  case 1:result.innerHTML="Monday" ; break;
  case 2:result.innerHTML="Tuesday" ; break;
  case 3:result.innerHTML="Wednesday" ; break;
  case 4:result.innerHTML="Thrusday" ; break;
  case 5:result.innerHTML="Friday" ; break;
  case 6:result.innerHTML="Saturday" ; break;


  }
// document.getElementById("results").value = "your day is" + txt;
// for(let i =0; i<gender.length; i++){
//   if (gender[i].checked) {
//     txt = txt + gender[i].value + "";
//   }
// }
 document.getElementById("results").value= "you are"+ txt;
}
let malenames=[ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femalenames=[ 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua,Ama'];
if (gender == "femalee" && month && year) {
  switch (results) {
    case 0:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[0];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
      case 1:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[1];
      document.getElementById('displaynames').textContent="Akan name is: ";
    
      break;
      case 2:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[2];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
      case 3:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[3];
      document.getElementById('displaynames').textContent="Akan name is: ";
      
      break;
      case 4:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[4];
      document.getElementById('displaynames').textContent="Akan name is: ";
      
      break;
      case 5:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[5];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
      case 6:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + femalenames[6];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
  }
  
} else if (gender == "malee" && month && year) {
  switch (results){
    case 0:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[0];
      document.getElementById('displaynames').textContent="Akan name is: ";
    
      break;
      case 1:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[1];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
      case 2:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[2];
      document.getElementById('displaynames').textContent="Akan name is: ";
      
      break;
      case 3:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[3];
      document.getElementById('displaynames').textContent="Akan name is: ";
   
      break;
      case 4:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[4];
      document.getElementById('displaynames').textContent="Akan name is: ";
     
      break;
      case 5:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[5];
      document.getElementById('displaynames').textContent="Akan name is: ";
      
      break;
      case 6:
      document.getElementById('results').textContent ="you were born on Sunday. Your akan name is" + malenames[6];
      document.getElementById('displaynames').textContent="Akan name is: ";
    
      break;
  }
}else{
  alert("invalid numbers")
}