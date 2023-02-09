/*
노드에서 최상위 scope에 존재하는 this는 module.exports(), 혹은 exports 객체를 가리킨다.
함수 선언에서의 this는 global 객체이다
*/
console.log(this);
console.log(this === module.exports)
console.log(this === exports);

function whatIsThis(){
    console.log('function', this === exports, this === global);
}

whatIsThis();