







//1. 무명의 리터럴로 생성할 수 있다.
// 2. 변수에 저장할 수 있다.
var hello = function () {
    return '안녕하세요!';
};



//2. 객체에 저장 할 수 있다.

var obj = {hello};
console.log(obj);

// 3. 함수의 매개변수에 전달 할 수 있다.
function repeat (func, count) {
    for(var i = 0; i < count; i++) {

        console.log(func());

        return function() {
            console.log(`${count}번 반복 완료`);
            
        }
    }   
}

3.
repeat(obj.hello, 5)

console.log("-----------------------");

4. 
var returnFunction = repeat(obj.hello, 5) 
returnFunction();

// 함수가 일급 객체라는 것은 함수를 객체와 통일하게 사용할 수 있다.
// 객체는 값이므로 함수는 값과 동일하게 취급이 가능하다.
// 변수 할당문, 객체의 프로퍼티값, 배열의 요소, 함수 호출의 인수, 함수 반환문 등
// 값처럼 사용이 가능하다.
    
