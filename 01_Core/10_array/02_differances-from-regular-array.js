/* 
일반적인 의미의 배열
-> 각 요소가 동일한 데이터 크기를 가지며
-> 빈틈없이 연속적으로 이루어져 있음
-> 인덱스를통해 임의의 요소에 한번에 접근 할 수 있는 고속 동작을 장점으로 가짐

자바스크립트에서의 배열
-> 일반적인 배열의 동작을 흉내낸 특수한 객체, 각각 메모리 공간이 동일한 크기를 갖지 않아도 되고,
-> 연속적으로 이어지지 않아도 된다.
*/

// 자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있다.
// = 모든 값이 배열의 요소가 된다.
const arr = [
    '홍길동',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];

console.log(arr);

/* 
자바 스크립트 배열의 특징
1. 인덱스로 배열 요소에 접근하는 경우, 일반적인 배열보다 느림
2. 요소를 산입, 삭제 하는 경우에는 일반적인 배열보다 빠름
*/

