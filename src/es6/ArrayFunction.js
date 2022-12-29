// ArrowFunction.js

// 화살표 함수(람다식) : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5 버전의 익명함수를 사용하여 함수를 생성하는 방식에서 변경되어 function 키워드를 생략하고, 매개변수와 코드블럭 사이에 '=>' 기호를
//  사용하는 방식
// 소스코드가 반환값 한 줄일 경우 코드 블럭을 생략할 수 있음(return 키워드도 생략)
// 매개변수가 1개인 경우, 매개변수의 괄호를 생략할 수 있음

// 사용 방법:
//  변수명 = (매개변수1, 매개변수2, ...) => {
//  실행할 소스코드
//  return 반환값
// }

// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
// 변수명 = 매개변수 => 반환값;
// 변수명 = () => 반환값;

// 기존 함수 선언 방식 1
function es5Fun1(a, b) {
    console.log(a + b);
    return a + b;
};
// 기존 함수 선언 방식 2
var es5Fun2 = function (a, b) {
    console.log(a + b);
    return a + b;
};

console.log('------기존 방식------')
es5Fun1(10,20);
es5Fun2(100,200);

let data = es5Fun1(10,20);
console.log(data);
data = es5Fun2(100,200);
console.log(data);
console.log();


console.log('------람다식------')
// 람다식
const es6Fun1 = (a,b) => {console.log(a+b); return  a+b;};

data = es6Fun1(22,33);
console.log(`리턴 받은 값 : ${data}`);

const es6Fun2 = (a,b) => a + b;
data = es6Fun2(15,20);
console.log(`리턴 받은 값 : ${data}`);

const es6Fun3 = (a,b) => console.log(a+b);
es6Fun3(10,50);

const es6Fun4 = (a) => a * 2;
data = es6Fun4(10);
console.log(`리턴 받은 값 : ${data}`);

// 매개변수 1개일시 () 생략가능
const es6Fun5 = a => a * 2;
data = es6Fun5(10);
console.log(`리턴 받은 값 : ${data}`);

// 매개변수 없을시 () 필요
const es6Fun6 = () => console.log("es6Fun6() 실행");
es6Fun6();