/**
 switch (expressão){
    case valor1:
        [break;]
    case valor2:
        [break;]

    default:
        [break;]

 } 
 
 */

 const fruit = 'limão'

 switch (fruit) {
     case 'banana':
         console.log('R$ 3,00 / kg');
         break;
     case 'mamão':
     case 'limão':
     case 'melãncia':
         console.log('R$ 2,00 / kg');
         break;
     case 'pera':
         console.log('R$ 2,00 / kg');
         break;
     default:
        console.log('Produto não tem em estoque');
         break;  
 }