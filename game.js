function begin(e) {
  if (e.keyCode == 13) {
  var code = '<textarea cols=141 rows=30 id="code"></textarea><pre><button onclick=nles()>Run</button>   <button onclick=stins()>Repeat Instructions</button></pre>'
  document.body.innerHTML = code;
  stins()
  }
}
function stins() {
alert("Mike: Alright, Follow These Instructions.")
alert("Mike: First Of All, Let's create a Hello World program.\n      1.Create an alert box by using 'alert()'.\n      2.Inside the alert statement, insert 2 quotation marks.\n      3.Then, inside the quotation marks, insert the phrase 'Hello, World!' and click Run")
}
function nles() {
var allcode = document.getElementById("").value;
}
document.onkeydown = begin;
