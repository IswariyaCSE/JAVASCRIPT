//Strict equal to operator
function equal(val){
    if(val===7){
        return "Equal";
    }
    return "Not Equal";
}
console.log(equal('7'));
//Strict not equal to operator
function notequal(value){
    if(value!==65){
        return true;
    }
    return false;
}
console.log(notequal('65'));
//if else-if else
function conditions(val){
    if(val<18){
        return "Not eligible to vote";
    }
    else if(val==18 || val==19){
        return "Just qualified to vote";
    }
    else if(val>=20 && val<60){
        return "Eligible to vote";
    }
    else{
        return "Senior citizens are also eligible to vote";
    }
}
console.log(conditions(56));
console.log(conditions(3));
console.log(conditions(19));
console.log(conditions(80));
//switch statements
function daysOfWeek(val){
    var output="";
   switch(val){
    case 1:
        output="Sunday";
        break;
    case 2:
        output="Monday";
        break;
    case 3:
        output="Tuesday";
        break;
    case 4:
        output="Wednesday";
        break;
    case 5:
        output="Thursday";
        break;
    case 6:
        output="Friday";
        break;
    case 7:
        output="Saturday";
        break;
    default:
        output="Enter a valid number";
        break;
   }
   return output;
}
console.log(daysOfWeek(5));
//returning boolean values from functions
function booleanreturn(a,b){
    return a==b;
}
console.log(booleanreturn(5,5));
console.log(booleanreturn(5,4));