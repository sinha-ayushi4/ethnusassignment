const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function show_date(){
  var date_para = document.querySelector(".date");
  var date = new Date();
  date_para.innerHTML = date.getDate()+"/"+months[date.getMonth()]+"/"+date.getFullYear();
}

function show_time(){
  var time_para = document.querySelector(".time");
  var date = new Date();
  time_para.innerHTML = date;
}