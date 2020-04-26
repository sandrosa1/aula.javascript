//var nome = "Sandro Amancio de Sá";
//var idade = 44;
//var idade2 = 29;
//var frase = "Japão e o melhor time do mundo"
//alert(nome, "tem", + idade + "anos"); // sinal de + comcatena
//alert(idade + idade2);
//console.log(nome); // funciona com navegador na funçao do programador.
//console.log(idade); 
//alert(frase.replace("Japão","Brasil"));  // Variavel.replace("Substitui","porOutra")
//console.log(frase.toUpperCase());  // caixa alta
//console.log(frase.toLowerCase());    // caixa baixa



//var lista = ["Laranja","Banana","Maça"];
//console.log(lista);
//alert(lista[1]);
//lista.push("Uva"); // .push acrecsenta um elemento no final do array
//alert(lista);
//lista.pop();  // tira um elemento no final do array
//alert(lista);
//alert(lista.length);  //>length da a quatidade de elementos de um array
//alert(lista.reverse());  // poem o array em ordem contraria
//console.log(lista.toString()) // imprime no console sem as colcheias
//console.log(lista[0]); console.log(lista.toString()[0]);  vai imprimir somente a primeira letra da string Zero
//console.log(lista.join("|"));   //Acresenta o que estiver entre as aspas entre os elementos do array


//Dicionarios
/*var fruta = {nome:"Maça", cor: "vemelha", idade: 3};
console.log(fruta); // imprime a lista
console.log(fruta.cor);   //imprimi somente a cor  */


/*var frutas = [{nome:"Maça", cor: "vemelha", idade: 3},{nome:"Uva", cor: "roxa", idade: 5}];
console.log(frutas[1]); // imprima toda a lista pedida
console.log(frutas[1].cor);   //imprimi somente  a posição da lisat pedida */



/*var idade = prompt("Qual a sua idade");  // prompt abre um campo de pergunta
if (idade > 18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
} */



/*var count = 0;
while (count <= 5)
{
    console.log(count);
    count = count + 1     // ou count++
}*/


/*for(count = 0; count <= 5; count++)
{
    alert(count);
}*/

/*var data = new Date();  // importa a data atual
alert(data);  // imprimi a data
alert(data.getMonth()+ 1);  // para trazer o mes certo e nescessario adicionar mais 1
alert(data.getDay());  
alert(data.getHours());*/



/*function soma(n1, n2)
{
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome )
{
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão","Japão","Brasil"));*/


/*function validaIdade(idade)
{
    var validar;
    if(idade >= 18)
    {
        validar = true
    }
    else
    {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade ?");
alert(validaIdade(idade));*/


function clicar()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado po clicar")
}
function redirecionar()
{
    //window.open("https://www.google.com/");   // abre outra aba
    window.location.href = "https://www.google.com/";  // abre na mesma aba
}
function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load()
{
    alert("Pagina carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}