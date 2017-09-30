function begin() {
alert("Mike: Bro, have you heard? Mozilla is having job openings for web deveopers who have experience in JavaScript.\nJoe(You): I don't know, I never coded in JavaScript.\nMike: Don't Worry, let me help you.")
document.body.innerHTML = '<textarea id="code" cols=141 rows=30></textarea><br /><pre><button onclick=strun()>Run</button>   <button onclick=stins()>Repeat Instructions</button></pre>'
stins()
}
function stins() {
alert("Mike: Alright, first of all let's make a hello world program.")
alert("MIKe: Firstly, type alert() in the textarea.\nMike: Then, put two quotation marks in the parentheses.\nMike: Finally, insert Hello, World! and press run.")
}
function strun() {
var stcode = document.getElementById("code").value
if (stcode == 'alert("Hello, World!")') {
alert("Mike: Good Job Joe.")
document.body.innerHTML = '<textarea id="code" cols=141 rows=30></textarea><br /><pre><button onclick=ndrun()>Run</button>   <button onclick=ndins()>Repeat Instructions</button></pre>'
var s = document.createElement("script");
s.async = true;
s.innerHTML = stcode;
document.body.appendChild(s);
ndins()
} else {
alert("Mike: Sorry Bro, you did something wrong.")
var s = document.createElement("script");
s.async = true;
s.innerHTML = stcode;
document.body.appendChild(s); 
}
}
