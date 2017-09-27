function begin(e) {
  if (e.keyCode == 13) {
  var code = '<textarea cols=190 rows=40 id="code"></textarea><pre><button onclick=nles()>Run</button>   <button onclick=stins()>Repeat Instructions</button></pre>'
  document.body.innerHTML = code;
  stins()
  }
}
function stins() {
alert("Mike: Alright, Follow These Instructions.")
alert("")
}
document.onkeydown = begin;
