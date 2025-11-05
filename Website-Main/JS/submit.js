/* problem for another day*/

function validateForm() {
      //Regexs for validation, match only letters.
      var letters = /^[A-Za-z]+$/;


      //get form 
      var myForm = document.getElementById('frm1');
      //get textboxes
      var cob = myForm.elements[0].value;
      var yob = myForm.elements[1].value;
      //get select
      var gndr = myForm.elements[2].value;

      console.log(cob.value)
      //validate the value of destination, Only letters allowed, no spaces, symbols or numbers.
      if (!cob.match(letters)) {
        alert('Please enter a valid destination');
        return false;
      }
      myform.submit();
    }

  