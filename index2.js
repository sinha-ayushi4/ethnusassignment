var word = prompt("Enter a word");
var charArray = word.split('');
charArray.sort();
word = charArray.join('');
alert("The sorted string is "+word);