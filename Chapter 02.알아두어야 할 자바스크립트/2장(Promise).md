## 2장 알아두어야 할 자바스크립트 

<br>
<br>

### 2.4. Promise
***
- 콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책
  - 프로미스 : 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
  - Then을 붙이면 결과를 반환함
  - 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행됨
  - Resolve(성공 리턴값) : then으로 연결
  - Reject(실패 리턴값) : catch로 연결
  - Finally 부분은 무조건 실행됨
  - async/await으로 한번 더 축약 가능


```javascript
const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});
//다른 코드가 들어갈 수 있음

promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.log(error); // 
    })
    .finally() => {

    }
```

<br>

- 콜백 패턴(3중첩)을 프로미스로 바꾸는 예제
```javascript
//콜백 패턴(3중첩)
function findAndSaveUser(Users){
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
                //생략
            })
        });
    });
};

//프로미스로 바꾸기
function findAndSaveUser(Users){
    User.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({gender : 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {

        })
}
```

<br>

- Promise.resolve(성공 리턴값) : 바로 resolve하는 프로미스
- Promise.reject(실패 리턴값) : 바로 reject하는 프로미스
```javascript
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2'];
    })
    .catch((error) => {
        console.log(error);
    });
```
- Promise.all(배열) : 여러 개의 프로미스를 동시에 실행
  - 하나라도 실패하면 catch로 감
  - allSettled로 실패한 것만 추려낼 수 있음
  
<br>
 
- async function의 도입
  - 변수 = await 프로미스인 경우 프로미스가 resolve된 값이 변수에 저장
  - 변수 await 값인 경우 그 값이 변수에 저장

```javascript
async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
    // 생략
}
```

<br>

- for await
  - 노드 10부터 지원
  - for await(변수 of 프로미스 배열)
    - resolve된 프로미스가 변수에 담겨 나옴
    - await을 사용하기 때문에 async 함수 안에서 해야함
```javascript
const promise1 = Promise.resolve('성공1'),
const promise2 = Promise.resolve('성공2'),
(async () => {
    for await (promise of [proimise1, promise2]){
        console.log(promise);
    }
})();
```

<br>
<br>