//parseint with a radix
function IntegerConversion(str){
    return parseInt(str,2);
}
console.log(IntegerConversion("10011"));
//Ternary operator 
function checkEqual(a,b){
    return a==b?"Yes":"No";
}
console.log(checkEqual(56,56));
//Muliple conditions using ternary operator
function check(num){
    return num>18?"Greater than 18":num<18?"Lesser than 18":"Equal to 18";
}
console.log(check(18));
//let keyword
function checkingScope(){
    "use strict";
    let haha="Outside";
    if(true){
        let haha="Inside";
        console.log("Inside the block: ",haha);
    }
    console.log("Outside the block: ",haha);
    return haha;
}
console.log(checkingScope());
//checking scope for var 
function checkingScope1(){
    "use strict";
    var hoho="Outside";
    if(true){
        var hoho="Inside";
        console.log("Inside the block: ",hoho);
    }
    console.log("Outside the block: ",hoho);
    return hoho;
}
console.log(checkingScope1());
//read only variable
function append(str){
    "use strict";
const SENTENCE=str+" are cool";
    console.log(SENTENCE);
}
append("Dinosaurs");
//mutate an array declared with constant keyword
const s=[9,6,59];
function editing1(){
    "use strict";
    s[0]=11;
    s[1]="9";
    s[2]="96";
}
editing1();
console.log(s);

