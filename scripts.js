var counter;
var input;
var numberInput;

input = prompt("How many random numbers do you want?");
numberInput = Number(input);
counter = 0;

//Creates a random number with an upper limit
function randomNumber(upper)
{
    return Math.floor(Math.random() * upper) + 1;
}

//verifies if the input is a number
if (isNaN(numberInput))
{
    alert("Refresh the page and enter a number");

}
//display the numbers on the page
while (counter < numberInput)
{
    var randNum = randomNumber(6);
    document.write(randNum + ' ');
    counter += 1;
}





