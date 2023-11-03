document.querySelector(".submit").addEventListener('click', function(){
    event.preventDefault();
    var firstName = document.querySelector('#first-name').value;
    var lastName = document.querySelector('#last-name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmation = document.querySelector('#confirmation').value;
    var age = document.querySelector('#age').value;
    var phone = document.querySelector('#phone').value;
    var address = document.querySelector('#address').value;
    var state = document.querySelector('#state').value;
    
    if(firstName===""){
      document.querySelector(".first-name-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".first-name-error").innerHTML=""; 
    }
  
    if(lastName===""){
      document.querySelector(".last-name-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".last-name-error").innerHTML=""; 
    }
  
    if(email===""||!email.includes("@")){
      document.querySelector(".email-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".email-error").innerHTML=""; 
    }
  
    if(password===""){
      document.querySelector(".password-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".password-error").innerHTML=""; 
    }
  
    if(confirmation==="" || confirmation!==password){
      document.querySelector(".confirmation-error").innerHTML="<span>POOR OR MISMATCH</span>";  
    }else{
      document.querySelector(".confirmation-error").innerHTML=""; 
    }
  
    if(age===""){
      document.querySelector(".age-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".age-error").innerHTML=""; 
    }
  
    if(phone===""){
      document.querySelector(".phone-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".phone-error").innerHTML=""; 
    }
  
    if(address===""){
      document.querySelector(".address-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".address-error").innerHTML=""; 
    }
  
    if(state===""){
      document.querySelector(".state-error").innerHTML="<span>POOR</span>";  
    }else{
      document.querySelector(".state-error").innerHTML=""; 
    }
  });