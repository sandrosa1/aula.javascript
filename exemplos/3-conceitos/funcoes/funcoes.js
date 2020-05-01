function getName(){
    return 'Sandro Amâncio de Sá';

}

function logFn(fn){
    console.log(fn());
};
const logFnResult = logFn;
logFnResult(getName);
