let year =document.getElementById("year");
let month =document.getElementById("month");
let day =document.getElementById("day");
let result =document.getElementById("result");

function displaynames()
{
  let dates = new Date(year.value, month.value,day.value);
  let dayy= dates.getDay();

  switch(dayy)
  {case 0:result.innerHTML="Sunday" ; break;
  case 1:result.innerHTML="Monday" ; break;
  case 2:result.innerHTML="Tuesday" ; break;
  case 3:result.innerHTML="Wednesday" ; break;
  case 4:result.innerHTML="Thrusday" ; break;
  case 5:result.innerHTML="Friday" ; break;
  case 6:result.innerHTML="Saturday" ; break;


  }

}
let malenames=[ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femalenames=[ 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua,Ama'];

if (result==) {
  
} else {
  
}