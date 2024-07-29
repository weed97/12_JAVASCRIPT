/* 03_Number-method */

// Number.isFinite : 인수로 전달 된 숫자값이 정상적인 유한수인지 검사하여 결과를 불리언으로 반환
console.log(Number.isFinite(10));           //true
console.log(Number.isFinite(-10));          //ture
console.log(Number.isFinite(Infinity));     //false
console.log(Number.isFinite(-Infinity));    //false
console.log(Number.isFinite(NaN));          // false

console.log(Number.isFinite(null));

console.log(Number.isFinite(null));

console.log(isFinite(null));        // 빌트인 전역함수 isFinite는 암묵적 타입변환을 한다
console.log('------------------');

// Number.isInteger : 인수로 전달 된 숫자값이 정수인지 검사하여 결과를 불리언으로 반환
console.log(Number.isInteger(10));          //ture
console.log(Number.isInteger(-10));         //ture
console.log(Number.isInteger(10.10));       //false
console.log(Number.isInteger(-10.10));      //false
console.log(Number.isInteger('10'));        //false
console.log(Number.isInteger(false));       //false
console.log(Number.isInteger(Infinity));    //false
console.log(Number.isInteger(-Infinity));   //false
console.log('-----------------');

// Number.isSafeInteger : 인수로 전달 된 숫자값이 안전한 정수인지 검사하여 결과를 불리언으로 반환
console.log(Number.isSafeInteger(10));      // true
console.log(Number.isSafeInteger(1000000000000000));    //false
console.log(Number.isSafeInteger(10.10));   // false
console.log(Number.isSafeInteger('10'))     // false
console.log(Number.isSafeInteger(false));   // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log('---------------------');

// Number.prototype.toExponential : 숫자를 지수 표기법으로 변환하여 문자열을 반환
// e 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 수를 나타낸다.
console.log((1.23456).toExponential()); // 1.23456e+0
// 소수점 이하로 표현할 자리수 전달한다.
console.log((1.23456).toExponential(3));    // 1.235e+0
console.log((1.23456).toExponential(1));    // 1.2e+0
console.log('-------------------');

// Number.prototype.toFixed : 숫자를 반올림하여 문자열로 반환한다.
// 진법을 나태내는 2~36 사이의 정수값을 인수로 전달할 수 있다
console.log((100).toString());          // 100
console.log((100).toString(2));         // 1100100
console.log((100).toString(8));         // 144
console.log((100).toString(16));        // 64
console.log('--------------------');














