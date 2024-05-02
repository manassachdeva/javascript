//TMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)
//global scope k pollution ko htane k liye humne iife k use kra

(function chai(){
    console.log(`DB connected`)
})();
(()=>{
    console.log(`DB connected two`)
})()
