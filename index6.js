document.querySelector(".login").addEventListener('click', function(){
    event.preventDefault();
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
  
    if(username===""){
      document.querySelector(".username-error").innerHTML="Invalid Username";
    }
  
    if (password === ""){
      document.querySelector(".password-error").innerHTML="Invalid password";
    }
  });