
function getAkanames() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var genders = document.getElementById("gender").value;
    
  
    // function to get gender
    function getGender () {
      for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    var myGenderValue = getGender();
    console.log(myGenderValue);
  
    
  }
  