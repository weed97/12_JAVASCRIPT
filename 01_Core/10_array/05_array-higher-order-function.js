/* 
배열 고차함수
* 고차 함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
*/

// Array.prototype.sort : 배열을 정렬 기준으로 정렬

let numbers = [];

// 10개의 1~100 까지 정수를 number 배열에 담아준다.
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1; // Meth.floor(내림처리) 
}
numbers.sort(); // 정렬

// 배열이 기본적으로 문자열 정렬이 되므로, 한지수, 세자리수가 올바르게 정렬되지 않음
console.log(`정렬전 numbers : ${numbers}`);

// 오름차순
console.log(`---------------오름차순----------------`);
function compare(a, b) {
    if( a > b) return 1; // a를 b보다 뒤에 위치시킴
    if( a == b) return 0; // a와 b의 순서를 변경하지 않음
    if( a < b) return  -1; // a를 b보다 앞에 위치시킴

}

numbers.sort(compare) // sort는 고차함수
console.log(`compare 정렬후 numbers : ${numbers}`);

//
console.log('---------------내림 차순-----------------');

numbers.sort((a,b) => b-a);
console.log(`compare 정렬후 numbers : ${numbers}`);

// Array.prototype.forEach : for 대체할 수 있는 고차함수

/* 
함수형 프로그래밍
순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을
제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
*/

numbers = [1,2,3,4,5];

// for(let i = 0; numbers.length; i++) {
//     // 하나하나 꺼내는 출력 방식
// }
/* 
배열.forEach(function(item, index, array)) {
배열의 각요소에 실행할 기능 작성}) */
console.log('----------------forEach------------------');

numbers.forEach(function(item,index,array) {
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})
console.log('----------------item * 10 ------------------');
// 각 요소 별로 = 10 한 값을 출력

// numbers.sort();
numbers.forEach(item => console.log(item * 10))

//Array.prototype.map
// : 배열의 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성된 새로운 배열 전환
// 콜백함수 : 다른 함수의 내부로 전달되는 함수

console.log('----------------map------------------');

const types = [true, 1, 'test'].map(item => typeof item);
console.log(`type : ${types}`);

const length = 
['apple', 'banana', 'cat', 'dog','agg'].map(item=> item.length);
console.log(`length : ${length}`);

// Array.prototype.filter
// : 배열 요소 전체를 대상으로 콜랩ㄱ 함수 호출 후 변형값이 true로 구성한 새로운 배열 변환

// 자바스크립트에서는 조건문에 % 2 -> 짝수면 0 홀수면 1
const odds = numbers.filter(item => item % 2);

// 짝수 판별
const odds1 = numbers.filter(item => item % 2 === 0) 

console.log(odds);
console.log(odds1);

// Array.prototype.some
// : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인 (Boolean 반환)

// 배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는가?
let result = [1,5,3,2,4].some(item => item < 10);
console.log(result);


// 배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는가?
let result2 = [1,5,3,2,4].some(item => item > 3);
console.log(result2);

arr1 = ['apple', 'banana', 'cat', 'dog']

// 이 배열에서 egg가 존재하는지 확인하는 코드
let result3 = arr1.some(item => item === 'egg')
let result4 = arr1.some(item => item === 'dog')
console.log(result3); // false
console.log(result4); // ture


// Array.prototype.every : 배열내 모든 요소가 콜백함수의 테스트를 통과하는지 확인 (Boolean)

// 모든요소가 3보다 큰지 확인
result = [1,5,3,2,4].every(item => item > 3);
console.log(result); // false

// 모든요소가 0보다 큰지 확인
result = [1,5,3,2,4].every(item => item > 0);
console.log(result); // true


const students = [
    {name : '유관순', score : 90},
    {name : '홍길동', score : 80},
    {name : '장보고', score : 70},
    {name : '장보고', score : 60}
];

result = students.find(item => item.name === '유관순');
console.log(result); // { name: '유관순 , socre : 90 }
result = students.findIndex(item => item.name === '유관순');
console.log(result); // 0



result = students.find(item => item.name === '신사임당');
console.log(result); // undefined
result = students.findIndex(item => item.name === '신사임당');
console.log(result); // -1

result = students.find(item => item.name === '유관순');
console.log(result); // { name: '유관순 , socre : 90 }
result = students.findIndex(item => item.name === '유관순');
console.log(result); // 0

// find, findIndex : 일치하는 요소를 찾으면, 더이상 탐색을 하지 않음 -> 하나의 요소,
// 인덱스만 반환

// 60점 이상의학생들을전부 알고싶으면?
// filter는 콜백함수의 실행 결과가 true 배열 요소 값만 추출해서 배열로 반환
console.log('---------------------filter, find-----------------------');
result = students.filter(item => item.score >= 60);
console.log(result);
result = students.filter(item => item.score >= 80);
console.log(result);
result = students.filter(item => item.name === '유관순');
console.log(result);





















