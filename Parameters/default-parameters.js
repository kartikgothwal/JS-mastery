function test(a,b=3){ // 3 is a default parameter
     return a*b
}

function rollDice(num=6){
    debugger
    return Math.floor(Math.random()*num) + 1 
}