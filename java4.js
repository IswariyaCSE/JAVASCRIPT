//global vs local scope 
var Animal="Dinosaur";
function Confusion(){
    var Animal="Froggie";
    return Animal;
}
console.log(Confusion());
console.log(Animal);
//Returning a value
console.log("Returning a value");
function value(num){
    return num-5;
}
console.log(value(10));
//Queue Implementation
function nextLine(arr,num){
    arr.push(num);
    return arr.shift;
}

var arr1 = [1,2,3,4];
console.log("Before Insertion: "+JSON.stringify(arr1));
console.log(nextLine(arr1,5));
console.log("After Deletion: "+JSON.stringify(arr1));
//Comparison Operators
//greater than operator
function isVal(num){
    if(num>99){
        return "Greater than operator";
    }
        return "Yes, it is greater than operator";
}
 console.log(isVal(101));
//greater than or equal to operator
 function isval(num1){
    if(num1>=99){
        return "Greater than and equal to operator";
    }
        return "Yes, it is greater than and equal to operator";
}
 console.log(isval(98));
 //less than operator
 function isnum(num2){
        if(num2<99){
            return "Less than operator";
        }
            return "Yes, it is lesser than operator";
    }
     console.log(isnum(98));
     //less than or equal to operator
     function isnum1(num3){
        if(num3<=99){
            return "Less than or equal to operator";
        }
            return "Yes, it is lesser than or equal to operator";
    }
     console.log(isnum1(101));
     

 

