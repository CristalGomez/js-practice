//Fizzbuzz 
//running a forloop through numbers 1-100
//if a number is divisible by 15 CL "fizzbuzz"
//if a number is divisible by 3 CL "fizz"
//if a number is divisible by 5 CL "buzz"
//else CL the number


for (i=1; i<100; i++){
    
    if(i%15 === 0){
        console.log("Fizzbuzz")
    } else if (i%3 === 0){
        console.log("Fizz")
    } else if(i%15 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
