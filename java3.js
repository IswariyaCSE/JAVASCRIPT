//To find Nth Character in the string
var string1="HeyyPeople";
var stringg1=string1[3];
console.log("The character in the 3rd index is:",stringg1);
//To find the last character in the string
var stringg2=string1[string1.length-1];
console.log("The last character in the string is:",stringg2);
//To find the Nth to last character in the string
var stringg3=string1[string1.length-3];
console.log("The acquired string is:",stringg3);
//WordBlanks
function myfunction(word1,word2,word3,word4){
    var output="";
    output+="The "+word1+" "+word2+" towards the "+word4+" and "+word3;
    console.log(output);
}
myfunction("dog","ran","was rescued","road");
//Accessing elemnets in an array
var arr=["Jonny",45,65.32];
var arr1=arr[2];
console.log("The element in the 3rd index is:",arr1);
//Accessing elemnets in multi-dimensional arrays
var array=[["Jonny",22],["Vickey",42],["Damon",24]];
var array1=array[2][0];
console.log("The element is:",array1);
//Manipulate arrays with push()
var array2=array.push(["Stefan",20]);
console.log("The array after pushing is:",array);
//Manipulate arrays with pop()
var array3=array.pop();
console.log("The array after popping:",array);
//Manipulate arrays with shift
//removes in the first position
var array3=array.shift();
console.log("The array after shifting is:",array);
//Manipulate arrays with unshift
//adds element in the first position
var array4=array.unshift(["Katherine",45]);
console.log("The array after unshifting is:",array);
//functions with arguments
function myfunc(a,b){
    console.log("The addition of two numbers is:",(a+b));
}
function myfunc1(a,b){
    console.log("The subtraction of two numbers is:",(a-b));
}
myfunc(5,10);
myfunc1(56,12);

