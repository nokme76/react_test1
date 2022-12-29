// ArrayMethod.js

// ES6에서 배열 관련 함수가 추가됨

// forEach() : 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하는 함수, 반환값이 없음
//  사용법 :
//    배열명.forEach(콜백함수(현재값이 저장될 변수, 현재 index, 사용한 배열명) {
//      실행할 소스코드
// });

const fruit = ['사과', '배', '복숭아'];
console.log(`원본 배열 : `);
console.log(fruit);

console.log(`----for문 사용 시----`);
// 기존 방식
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
console.log();

console.log(`----for ~ in문 사용 시----`);
// for in 문
for (const item in fruit) {
    console.log(fruit[item]);
}
console.log();

console.log(`----forEach문 사용 시----`);
// forEach
fruit.forEach(function (item) {
    console.log(item);
});
console.log();

console.log(`----forEach문 매개 변수 여러 개 사용 시----`);
// forEach index 사용
fruit.forEach(function (item, index) {
    console.log(`index : ${index}, value : ${item}`);
});
console.log();

// forEach index, 배열명 사용
fruit.forEach(function (item, index, arrName) {
    console.log(`current array : ${arrName}, index : ${index}, value : ${item}`);
});
console.log();


console.log(`----forEach 람다----`);
// forEach
fruit.forEach((item => {console.log(item);}));
console.log();


// map() : forEach와 같이 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하고 그 결과값을 배열로 반환하는 함수
//  사용법 :
//    배열명.map(콜백함수(현재값이 저장될 변수, 현재 index, 사용한 배열명) {
//      실행할 소스코드
//      return 반환 값
// });

console.log('\n -----map 사용------');

const numbers = [4, 9, 16, 25];
console.log(`원본 배열 : `);
console.log(numbers);

console.log(`map 사용 후 데이터 : `)
let data = numbers.map(function (item) {
    console.log(`현재 값 : ${item}`);
    return item * 2;
});
console.log(data);
console.log();


console.log(`\n----map() 매개 변수 여러개 사용 시----`);
// index 사용 매개변수 사용
data = numbers.map(function (item, index) {
    console.log(`index : ${index}, value : ${item}`);
    return item * 2;
});
console.log(data);
console.log();
// index, 배열 매개변수 사용
data = numbers.map(function (item, index,current) {
    console.log(`current array : ${current}, index : ${index}, value : ${item}`);
    return item * 2;
});
console.log(data);
console.log();

console.log(`\n----map() 람다식----`);
//람다식
data = numbers.map((item => {console.log(`value : ${item}`); return  item *2;}));
console.log(data);