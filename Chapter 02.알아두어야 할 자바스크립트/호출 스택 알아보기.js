function first(){
    second();
    console.log('첫 번째');
}

function second(){
    third();
    console.log('두 번째');
}

function third(){
    console.log('세 번째');
}

first();

 
/*     예측 : 3 -> 2 -> 1
    실제 : 3 -> 2 -> 1  */
