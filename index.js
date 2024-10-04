// 1-Задание.

for (i = 1; i <= 10; i++) {
    console.log(i);
}
// 2-Задание.

let n = 5;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));

// Задание 3.

for (let i = 2; i <= 100; i +=2) {
    console.log(i);
}
 
for (let i = 1; i <= 100; i +=2) {
    console.log(i);
}

//Задание 4.

let simpleNum = 17;
let count = 0;
for (let j = 2; j<=simpleNum*0.5; j++)
    { if (simpleNum%j===0) { count = count + 1}
    }    
console.log(simpleNum, count? 'составное число': 'простое число','\n')

// Задание 5.

let number = 5;


for (let i = 1; i <= 10; i++) {

console.log(`${number} x ${i} = ${number * i}`);

}

// Задание 6.

const numSum = 123;
let summa = 0;
sumStr = numSum.toString();
for (i=0; i<sumStr.length; i++)
    {summa = summa + Number(sumStr[i])}
console.log('сумма цифр числа ', numSum, 'равна', summa, '\n')

  // Задание 7.


  const converseNum = 12345;
  let newStr = '';
  converseStr = converseNum.toString();
  l = converseStr.length 
  for (i=0; i<l; i++)
     {(newStr = converseStr[i] + newStr)}
  console.log( ' Обратное число', Number(newStr), '\n')

// Задание 8.

var num = 113213;
var quantity = 1;

while (num >= 10) {
  num = Math.round(num) / 10;
  quantity++
  }
  
  console.log('Цифр в числе ' + quantity);
   
  // Задание 10.

  const numSqrt = 5;
  let sumSqrt = 0;
  strSqrt = ' ';
  for (i=1; i<=numSqrt; i++)
     { sumSqrt = sumSqrt + i**2;
      strSqrt = strSqrt + i + '**2 + ';
     }
   console.log (strSqrt, '=', sumSqrt) 
