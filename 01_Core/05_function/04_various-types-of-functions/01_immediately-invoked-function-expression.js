// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는함수로 단 한 번만 호출되며 재호출이 불가하다.


// 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
(function() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출')

})();

// 함수 이름을 작성할 수도 있지만, 해당 이름으로 다시 호출 할 수 있다.
(function hello() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출')
    
})();

// console.log(hello()); // ReferenceError: hello is not defined 

(function hello(name) {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출')
    console.log(`${name}님 안녕하세요~`);
    
    
})('홍길동');

// 모듈화
// 초기화 코드 
// 전역변수와 변수 충돌 방지
