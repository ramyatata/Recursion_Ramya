//Recursive
//Iterative

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

/* 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers */

//recursive
function GCD(num1, num2){
  var n1 = num1 >= num2 ? num1: num2;
  var n2 = num1 >= num2 ? num2: num1;
  var r = n1%n2;
  if(r === 0){
    return n2;
  } else {
    return GCD(n2, r);
  }
}

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

//Iterative
function GCD_Iterative(num1, num2) { 
  var n1 = num1 >= num2 ? num1 : num2; 
  var n2 = num1 < num2 ? num1 : num2;  
  var r;

  while(r !== 0){
    r = n1 % n2; 
    n1 = n2;   
    n2 = r;   
  }
  return n1;
}
//console.log(GCD(12, 24));

/*3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]*/

//recursive
function range(n1, n2){
  if(n2-n1 === 1) {
    return [n2];
  } 
  list = range(n1, n2-1);
  list.push(n2);
  return list;
}
//console.log(range(2, 6));
//Iterative
function range_Iterative(n1, n2){
  var results = [];
  for(var i = n1; i < n2; i++){
    results.push(i);
  }
  return results;
}

/*5. Write a JavaScript program to compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent */
//Recursive

//Iterative







