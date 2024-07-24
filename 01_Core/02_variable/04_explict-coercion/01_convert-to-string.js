/* 
명시적 타입 형변환
-> 개발자의 의도에 따라 타입 변환을 하는 것
*/

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); // "10"
console.log(String(NaN)); // NaN
console.log(String(Infinity)); // infinity
console.log(String(false)); // false
console.log(String(true)); // true

// 2. Object.prototype.toString 메소드 사용
console.log((10).toString); // [Function: toString]
console.log((NaN).toString); // [Function: toString]
console.log((Infinity).toString); // [Function: toString]
console.log((false).toString); // [Function: toString]
console.log((true).toString); // [Function: toString]




