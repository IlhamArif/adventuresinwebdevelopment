function begin() {
alert("Mike: Bro, have you heard? Mozilla is having job openings for web deveopers who have experience in JavaScript.\nJoe(You): I don't know, I never coded in JavaScript.\nMike: Don't Worry, let me help you.")
document.body.innerHTML = '<textarea id="code" cols=141 rows=30></textarea><br /><pre><button onclick=strun()>Run</button>   <button onclick=stins()>Repeat Instructions</button></pre>'
stins()
}
function stins() {
alert("Mike: Alright, first of all let's make a hello world program.")
alert("Mike: Firstly, type alert() in the textarea.\nMike: Then, put two quotation marks in the parentheses.\nMike: Finally, insert 'Hello, World!' and press run.")
}
function strun() {
var stcode = document.getElementById("code").value
if (stcode == 'alert("Hello, World!")') {
var s = document.createElement("script");
s.async = true;
s.innerHTML = stcode;
document.body.appendChild(s);
alert("Mike: Good Job Joe.")
alert("Mike: Now, let's learn about prompts and how to get user input.")
document.body.innerHTML = '<textarea id="code" cols=141 rows=30></textarea><br /><pre><button onclick=ndrun()>Run</button>   <button onclick=ndins()>Repeat Instructions</button></pre>'
ndins()
} else {
var s = document.createElement("script");
s.async = true;
s.innerHTML = stcode;
document.body.appendChild(s);
alert("Mike: Sorry Bro, you did something wrong.") 
}
}
function ndins() {
alert("Mike: Now, type prompt() in the textarea.\nMike: Then, put two quotation marks in the parentheses.\nMike: Lastly, insert 'What is your name?' and press run.")
}
function ndrun() {
var ndcode = document.getElementById("code").value;
if (ndcode == 'prompt("What is your name?")') {
var s = document.createElement("script")
s.async = true;
s.innerHTML = ndcode;
document.body.appendChild(s);
alert("Mike: Good Job Joe.")
alert("Mike: Now, let's learn about variables and how to create them")
document.body.innerHTML = '<textarea id="code" cols=141 rows=30></textarea><br /><pre><button onclick=ndrun()>Run</button>   <button onclick=ndins()>Repeat Instructions</button></pre>'
rdins()
} else {
s.async = true;
s.innerHTML = ndcode;
document.body.appendChild(s);
alert("Mike: Sorry Bro, you did something wrong.")
}
}
