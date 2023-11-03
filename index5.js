document.querySelector(".submit").addEventListener('click', function(){
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var website = document.querySelector('#website').value;
    var message = document.querySelector('#message').value;
  
    if(name===""){
      document.querySelector("#name-error").innerHTML="The field is required";
      document.querySelector("#name").classList.add("border-red");
    }
  
    if (email === "" || !email.includes("@")){
      document.querySelector("#email-error").innerHTML="A valid email address is required";
      document.querySelector("#email").classList.add("border-red");
    }
  
    if(website===""){
      document.querySelector("#website-error").innerHTML="A valid url is required";
      document.querySelector("#website").classList.add("border-red");
    }
  
    if(message===""){
      document.querySelector("#message-error").innerHTML="This field is required";
      document.querySelector("#message").classList.add("border-red");
    }
  });