//Implementing a record
var object={
   48565:{
    "fruits name":"Banana",
    "Color":"Yellow",
    "Size":"Medium",
    "Quantity":"5kg",
    "other fruits":[
        "Watermelon",
        "Grapes",
        "Pineapple",
        "Orange",
        "Apple",
        "Mango"
    ]
},
    54545:{
        "veggies name":"Carrot",
        "Color":"Orange",
        "Type of veggie":"root",
        "Quantity":6
    }
};
var originalentry=JSON.parse(JSON.stringify(object));
function updateRecords(id,prop,value){
    if(value===""){
        delete object[id][prop];
    }
    else if(prop==="other fruits"){
        object[id][prop]=object[id][prop]||[];
        object[id][prop].push(value);
    }
    else{
        object[id][prop]=value;
    }
    return object;
}
console.log(updateRecords(48565,"other fruits","tomato"));
//iterate with while loop
var myArray=[];
var i=0;
while(i<10){
    myArray.push(i);
    i++;
}
console.log("While loop array:",myArray);
//iterate with for loop
var arr=[];
for (var i=1;i<6;i++){
    arr.push(i);
}
console.log("For loop array:",arr);
//iterate odd numbers with for loop
var arr1=[];
for(var i=1;i<10;i+=2){
    arr1.push(i);
}
console.log("Array contains of odd numbers:",arr1);
//iterate even numbers in reverse order using for loop
var arr2=[];
for (var i=10;i>0;i-=2)
{
    arr2.push(i);
}
console.log("array contains of even numbers in reverse order:",arr2);
//Adding array elements
var arr3=[5,9,5,3];
var total=0;
for(var i=0;i<arr3.length;i++){
    total+=arr3[i];
}
console.log("The total of the array elements:",total);
//iterate with do while loop
var arr4=[];
var i=10;
do{
    arr4.push(i);
    i++;
}while(i<13);
console.log(i,arr4);
//generate random fraction
function function1(){
    return Math.random();
}
console.log(function1());
//generate random whole numbers
function function2(){
    return Math.floor(Math.random()*20);
}
console.log(function2());
//generate random whole numbers within a range
function randomRange(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
var myRandom=randomRange(5,10);
console.log(myRandom);
//ParseInt
var myInt=0;
function function3(str){
    return parseInt(str);
}
var integer=function3("56");
console.log("The integer using parseInt:",integer);