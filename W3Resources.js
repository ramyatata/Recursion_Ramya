
/* 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */
//Recursive
function factorial(n){
 if(n === 1){
     return 1;
 } else {
     return n * factorial(n-1);
 }
   
}

//Iterative
function factorial_Iterative(n){
   var result = 1;
   for(var i = n; i > 1; i-- ){
     result = result*i;
   }
   return result;
}

//console.log(factorial(5));   //120

