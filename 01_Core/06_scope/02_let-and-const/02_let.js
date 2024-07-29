/* 
let
var 키워드의 단점을 보완하기위해 ES6 새로운 변수 선언 키워드인
let, const를 도입
// let,const 같은 스코프내에서 중복 선언이 허용하지 않는다.
*/

// 1. 변수 중복 선언 금지
let msg = '안녕하세요';
// let msg = '안녕히가세요';

// 2. 블록레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록 (함수 ,if문 for문, while문 ,try/cathch문)을 지역 스코프로 인정한다.


// function hello() {
//     let msg = '안녕하세요'
//     console.log(msg);
    
// }
// hello();

let i = 0;
for(let i = 0; i < 10; i++) {
    console.log(`지역 변수 i : ${i}`);
    
}
console.log(`전역변수 i : ${i}`);

// 3. 변수 호이스팅

// console.log(x);

//ReferenceError: Cannot access 'x' before initialization
let x; 

let y = 1;
if(true) {
    // 변수 호이스팅으로 아래의 지역변수 y가 선언이 먼저 일어났기 때문에
    // 전역 변수 y를 참조하지 않고, 오류가 발생
    console.log(y);
    let y = 2;
}



