// and logico (&&)
var a1 =  true   && true;    // retorna true
var a2 =  true   && false;   // retorna false
var a3 =  false  && true;    // retorna false
var a4 =  false  && (3 == 4);// retorna false
var a5 =  "Gato" && "Cão";   // retorna Cão
var a6 =  true   && "Gato";  // retorna false
var a7 =  "Gato" && false;   // retorna false

// OU logico(||)

exp1 || exp2

var a1 =  true   || true;    // retorna true
var a2 =  true   || false;   // retorna true
var a3 =  false  || true;    // retorna true
var a4 =  false  || (3 == 4);// retorna false
var a5 =  "Gato" || "Cão";   // retorna gato
var a6 =  true   || "Gato";  // retorna gato
var a7 =  "Gato" || false;   // retorna gato

// NOT logico (!)
!exp1

var n1 =  !true;    // retorna false
var n2 =  !false;   // retorna true
var n3 =  !"gato";  // retorna false