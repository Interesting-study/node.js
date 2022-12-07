function oneMore(){
    console.log('one more');
}

function run(){
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    } , 0)

    new Promise((resolve) => {
        resolve('hi'); // 여기까지는 동기
    })
    .then(console.log); //then을 만나는 순간 비동기로 간다.
    oneMore();
}

setTimeout(run, 5000);

/*
promise의 우선순위가 더 높다.
따라서 run run -> one more -> hi -> wow
*/