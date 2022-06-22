

var cidades = document.body.textContent.split("*")[1].split("*")[0];
//alert(exemplo2);
document.body.innerHTML += "<br><br><br>Respostas: <br><b>" + cidades + "<b>";

var cidades = document.body.textContent.split("*")[3].split("*")[0];
//alert(exemplo2);
document.body.innerHTML += "<br><b>" + cidades + "<b>";

var cidades = document.body.textContent.split("*")[5].split("*")[0];
//alert(exemplo2);
document.body.innerHTML += "<br><b>" + cidades + "<b>";

var roteiroA = document.body.textContent.split("#")[1].split("#")[0];
document.body.innerHTML += "<br><b>" + roteiroA + "<b>";

var roteiroA = document.body.textContent.split("#")[4].split("#")[0];
document.body.innerHTML += "<br><b>" + roteiroA + "<b>";

var roteiroA = document.body.textContent.split("#")[7].split("#")[0];
document.body.innerHTML += "<br><b>" + roteiroA + "<b>";

var quantidadelocais = 3;
document.body.innerHTML += "<br><b>" + quantidadelocais + "<b>";

var centro = document.body.textContent.split("Região:")[2].split("#")[0];
document.body.innerHTML += "<br><b>" + centro + "<b>";

var downtown = document.body.textContent.split("Região:")[5].split("#")[0];
document.body.innerHTML += "<br><b>" + downtown + "<b>";




// var roteirosA = texto.split("#");s
// var locaisRA = texto.split("");
// var pontosSP =  texto.split("");
// var pontosLA =  texto.split("");


// cidades.forEach((cidade) => { 

// var cidadeSplit = cidade.split(" para ");
// console.log(cidade.split);
// });