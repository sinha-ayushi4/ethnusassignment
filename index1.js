var num = prompt("Enter a number");
var rev = 0;

while(num>0){
  rev = rev*10+(num%10);
  num = Math.floor(num/10);
}

alert("The reverse of the number is "+rev);