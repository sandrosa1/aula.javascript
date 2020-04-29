//in
something in somethingItems

//Array
var arvores = new Array("pau-brasil","loreiro","cedro","carvalho","sicômoro");
0 in arvores;               //retorna true
3 in arvores;               //retorna true
6 in arvores;               //retorna false (não esta no array)
"cedro" in  arvores;        //retorna false(voce deve especificar o numero do indece
                            // não o valor naquele indice)
"length" in arvores;        //retorna true (lenght é uma propriedade de Array)

// Obejetos predefinidos
"pi" in Math;               //retorna true
var minhaString = new String("coral");
"lenght" in minhaString;   //retorna true

// Obejetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;     // retorna true
"modelo" in meucarro;     // retorna true

// instaceof
obejeto instanceof tipoObejto

var dia = new Date(2018, 12, 17);
if(dia instanceof Date) {
    // code here
}