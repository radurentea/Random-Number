var counter;
var input;
var input2;
var input3;
var numberInput;
var upperLimit;
var lowerLimit;

input = prompt("How many random numbers do you want?");
input2 = prompt("What's the lower limit of the numbers?");
input3 = prompt("What's the upper limit of the numbers?");

numberInput = Number(input);
lowerLimit = Number(input2);
upperLimit = Number(input3);
counter = 0;


//Creates a random number with a lower and upper limit
function randomNumber(upper, lower)
{
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


//verifies if the input is a number
if (isNaN(numberInput) || isNaN(lowerLimit) || isNaN(upperLimit))
{
    alert("You need to enter only numbers in order to make it work. Please refresh the page and try again!");

}
//display the numbers on the page
while (counter < numberInput)
{
    var randNum = randomNumber(upperLimit, lowerLimit);
    document.write(randNum + ' ');
    counter += 1;
}





