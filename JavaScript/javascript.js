//variables 
var a=20;
let b=30;
const pi=3.14;

document.write(a+"<br>");
document.write(b+"<br>");
document.write(pi+"<br>");

//concating string

var str1="hello";
var str2="haii";
var concat=str1+' '+str2;
var concat1=str1.concat( " ",str2);
document.write(concat+" method 1<br>");
document.write(concat1+" method 2<br>");

//length 

var name="kiran";
document.write(name.length+"<br>");

//substring

document.write(name.substring(0,2)+"<br>");
var leng=name.slice(0,4);
document.write(leng.length+"<br>");
document.write(name.slice(0,4)+"<br>");

//string slicing 
var word="Hello world";
document.write(word[0],word[1]+"<br>");
document.write(word.includes('llo'),"<br>");
document.write(word.replace("world","Univerce")+"<br>");
document.write(word.indexOf("w")+"<br>");

//lowercasing & upercaseing
document.write(word.toUpperCase()+"<br>");
document.write(word.toLowerCase()+"<br>");

document.getElementById('header').innerHTML="haii";
document.getElementsByClassName('header')[0].innerHTML='welcom';
document.getElementsByTagName('h1')[0].innerHTML="heyy welcome";
 







