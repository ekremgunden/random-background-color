var body = document.getElementById('body');
var nameColor = document.getElementById('name');

function yap() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.background= '#'+ randomColor;
    nameColor.innerText="Renk Kodu: "+("#"+ randomColor).toUpperCase();
}
 