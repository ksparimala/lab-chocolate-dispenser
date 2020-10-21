var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count)
{
if(count>0)
{
    for(let i=0;i<count;i++)
    {
        chocolates.unshift(color);
    }
}
else
{
    return 'Number cannot be zero/negative'
}
}
//progression 2
function removeChocolates(chocolates,number) {
    var result = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < number; i++) {
            result.push(chocolates.shift());
        }
    return result;
}
//Progression 3: Dispense ___ chocolate
function dispenseChocolates(chocolates,number)
{
    var result = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < number; i++) {
            result.push(chocolates.pop());
        }
    return result;
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color)
{
    var result = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < number; i++) {
            result.push(chocolates.pop(color));
        }
    return result;
}
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(arr2)
{
    let arr=[];
    for(let i=0;i<arr2.length;i++)
    {
    let filteredArray = chocolates.filter(function(chocolate){
        return chocolate == arr2[i];
    });
    if(arr2[i]!=chocolates)
    {
    arr.push(filteredArray.length);
    }
    }
    return arr;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
let input = ["green", "silver", "blue", "crimson", "purple","red", "pink"];
function sortChocolateBasedOnCount(){
    let chocolateArray = noOfChocolates(input);
    chocolateArray.sort(function(a,b){
        return b - a;
    });
    return chocolateArray;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor)
{

}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
