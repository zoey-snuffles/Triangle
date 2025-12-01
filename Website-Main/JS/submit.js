
function validate() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const feedback = document.getElementById('picDiv');
  

  const namePattern = /^[a-zA-Z_ ]*$/;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const phonePattern = /^[0]+[0-9]{9}$/;
  

 
    

  if (!namePattern.test(name)){
    feedback.style = "display : block"
    console.log("name")
  } 
  
  else if (!emailPattern.test(email)){
    feedback.style = "display : block"
    console.log("email")
  }
   
  else if (!phonePattern.test(phone)){
    feedback.style = "display : block"
    console.log("phone")
  }

  else{
    document.getElementById("formStyle").innerHTML = "Submitted. We will be in contact shortly! <img src = \'../Media/ploarbearyes.png\' width = \'128\' height = \'128\'>"
  }
  
  
}





 
