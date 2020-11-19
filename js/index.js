function reverseThisString(string)
{
    let revString = '';
    for (let i = string.length - 1; i >=0; i--)
        revString += string[i];
    console.log(string);
    console.log(revString);
}

reverseThisString('all the best'); 

function swapCase(string)
{
    let name = '';
    for (let i = 0; i <= string.length; i++)
    {
        if ((string[i] >='A') && (string[i] <='Z'))
            name += string[i].toLowerCase();
        else if ((string[i] >='a') && (string[i] <='z'))
            name += string[i].toUpperCase();
        else
            name += ' ';   
    }
    console.log(string);
    console.log(name);
    
}
swapCase('HI how Are You');

const toCelcius = [32, 100, 45, 65];
const cel = toCelcius.map(function (array) {
    return (array - 32) * (5 / 9).toFixed(0);
     
});
console.log(cel);

/*function toCelcius(array)
{
    let cel = [];
    for (let i = 0; i <array.length; i++)
    {
        cel[i] = (array[i] - 32) * (5 / 9).toFixed(0);  
    }  
    console.log(cel)
};
toCelcius([48, 81, 100,32]);*/

const passOrFail = [90, 75, 60, 74];
const result = passOrFail.map(function (x) {
    if (x >= 75)
        return true;
    else
        return false;
});
console.log(result);

/*function passOrFail(array)
{
    
    for (let i = 0; i <array.length; i++)
    {
        if (array[i] >= 75)
            array[i] = true;
        else
            array[i] = false;     
    }
    console.log(array);
}
passOrFail([86, 70, 97, 87, 60]);*/

function germanNumbers()
{
    let arr = [];
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    for (let i = 0; i <cardinalNumbers.length; i++) {
        arr[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }
    console.log(arr);
}
germanNumbers();


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const returnPrimeNumbers = numbers.filter(function (num) {
   if (num===1){
        return false;
   }
   else if (num === 2) {
        return true;
   }
   else {
        for(let x = 2; x < num; x++){
            if (num % x === 0) {
                return false;
            }
         }
      }
      return true;
});
console.log(returnPrimeNumbers);

 function data(){
    for (let i = 1; i <= 100; i++){
        if ((i % 3 === 0) && (i % 5 === 0))
            console.log('CSC225 RULES LOVE JAVASCRIPT');
        else if (i % 3 === 0)
            console.log('CSC225 RULES');
        else if (i % 5 === 0)
            console.log('LOVE JAVASCRIPT');
        else
            console.log(i);
    }
}
data();

