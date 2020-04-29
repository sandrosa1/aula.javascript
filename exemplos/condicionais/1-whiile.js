/**
 while (condicional)
    declaração
 */

 var n = 0;
 var x = 0;
 while(n < 3) {
     n++;       // incremento para nao gerar loop infinito
     x += n;     // 1 , 3 , 6
 }
 console.log(x);