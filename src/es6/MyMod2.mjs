// MyMod2.mjs

// export 로 설정 방법2
// 변수, 함수, 클래스를 기존에 사용하듯이 다 선언하고, 파일의 끝에서 export 진행


const num1 = 10;
const num2 = 20;

const sum = () => num1 + num2;

const sub = () => num1 - num2;

export {num1, num2, sum};

export default sub;
