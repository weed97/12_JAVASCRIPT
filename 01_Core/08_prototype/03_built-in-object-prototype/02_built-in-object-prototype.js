const num = new Number(100);
// num 은 Number.prototype을 상속 받았는가?
console.log(num.__proto__ === Number.prototype);
// num 은 Object.prototype을 상속 받았는가?
console.log(num.__proto__.__proto__ === Object.prototype);

// 체인 맨위에는 null 이 있다.
console.log(num.__proto__.__proto__.__proto__ === null);

// 참고

// 내장 프로토타입은 수정이 가능하다.

String.prototype.hello = function() {
    console.log(`hello, ${this}`);
}

'javaScript'.hello();

// 내장 프로토타입의 메서드를 빌려서 새로운 메서드를 만드는 것 가능
const obj = {
    0 : "hello",
    1 : "javascript",
    length: 2,
}

obj.join = Array.prototype.join;

console.log(obj.join(','));


