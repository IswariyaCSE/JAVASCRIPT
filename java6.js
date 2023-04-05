//building and accessing object properties
var myGroceries={
    type:"fruits",
    list:[
      "Watermelon","grapes","apple","mango"
    ],
    "watermelon quantity": 2,
    "grapes quantity": 5,
    "apple quantity" : "3kg",
    "mango quantity": 6,
    listt:["green","black","red","yellow"]
};

var myWatermelonColor=myGroceries.listt[0];
console.log(myWatermelonColor);
var myGrapesQuantity=myGroceries["grapes quantity"];
console.log(myGrapesQuantity);

//accessing nested objects
var myStorage={
    "car":{
        "inside":
        {
            "glove box": "maps",
            "passesnger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBoxContents=myStorage.car.outside.trunk;
console.log(gloveBoxContents);
