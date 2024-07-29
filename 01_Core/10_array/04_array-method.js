// 배열 메소드

const arr = [];

// 배열의 생성자 함수 = Array
console.log(arr.constructor === Array);

// 배열의 프로토타입 객체 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

/* 
Array.prototype.indexOf
- indexOf : 배열에서 요소가 위치한 인덱스를 리턴
- lastIndexOf : 배열의 요소가 위치한 마지막 인덱스 리턴
- includes : 배열에 해당 요소 포함 여부 리턴
*/
const foodList = ['물회','삼계탕', '냉면', '수박', '물회']

console.log('--------------indexOf---------------');
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); // 0
// 중복값 중 두번째 위치반환
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); //0 // 두번째 위치 반환
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`); // -1

console.log('--------------indexOf---------------');
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`); // 4
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`); // -1

console.log('----------------includes----------------');
console.log(`foodList.includes('물회) : ${foodList.includes('물회')}`); // true
console.log(`foodList.includes('물회) : ${foodList.includes('삼겹살')}`); // false














// chickenList.unshift('간장치킨');
// chickenList.unshift('마늘치킨');

console.log(`unshift 후 chickenList : ${chickenList}`);

console.log('-------------------shift--------------------');

console.log(`chickenList.shift : ${chickenList.shift()}`); // 마늘치킨
console.log(`chickenList.shift : ${chickenList.shift()}`); // 간장치킨
console.log(`chickenList.shift : ${chickenList.shift()}`); // 양념치킨

console.log(`shift 후 chickenList : ${chickenList}`);

console.log(`----------------concat-----------------`);
// Array.prototype.concat : 두개 이상의 배열을 결합
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '레드벨벳'];
const idol3 = ['블랙핑크', '에스파'];

// 배열명.concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2); // idol1 기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2); // idol3 기준으로 합쳐짐

console.log(`${mix}`);
console.log(`${mix2}`);

console.log('----------------------slice-------------------------');
// Array.prototype.slice : 배열의 요소 선택 잘라내기

const front = ['HTML', 'CSS', 'Javascript', 'jQuery']

// slice(시작인덱스, 종료 인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`front : ${front}`); 

console.log('----------------------join-------------------------');
// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반영

const snackList = ['사탕', '초콜릿', '껌', '과자'];
console.log(`snackList.join() : ${snackList.join()}`); // 구분자 ,
console.log(`snackList.join() : ${snackList.join()}`); // 구분자/

console.log('---------------reverse----------------');
// Array.prototype.reverse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse() : ${[1,2,3,4,5].reverse()}`);












