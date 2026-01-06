//Immediately Invoked Function Literals(IIFL)

(function chai(){
    console.log(`DB CONNECTED`)
})();

((name)=>{
    console.log(`DB Connected Two ${name}`);
    
})('Dhaval');

