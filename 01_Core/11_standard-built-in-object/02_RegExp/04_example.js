// 1. http:// 또는 https:// 로 시작하는지 검사
// // hint 이스케이프문 \/\/ => //
const url = 'https://www.google.com';
console.log(/^http:\/\/ |^https:\/\//.test(url) );


// 2. 파일명을 통해 자바스크립트 확장자인지 검사하세요
const fileName = 'test.js';
console.log(/[test.js]/s.test(fileName));

// 3. 아이디로 사용 가능한지 검사
// 조건 알파벳 대소문자 또는 숫자로 시작하고 끝나며 6~12자리인지 검사
const id = 'hello123';
console.log(/^[A-Za-z0-9][A-Za-z0-9]{6,12}[A-Za-z0-9]$/.test(id));


// 4. 핸드폰 번호 형식에 맞는지 검사
// 형식 : 010-xxxx-xxxx
// x : 숫자
const patternphone = /^010-\d{4}-\d{4}$/;
const phone = '010-1234-5678';
console.log( /^010-\d{4}-\d{4}$/.test(phone));
