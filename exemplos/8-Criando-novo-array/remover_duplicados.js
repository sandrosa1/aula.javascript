
// sintaxe complexa
for(var i = 0; i < Array.length; i++ ) {

    if(Array.indexOf( Array[i]) === i ) {

        models.push(Array[i]);
}}

// sintase redusida com filter


var uniqueProducts = array.filter( function(elem, i, array)
{
    return array.indexOf(elem)  === i;
}
 ) ;


