// ModUse.mjs

// export 사용

import {name, job, gender, getInfo} from "./MyMod1.mjs";
import {num1, num2, sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";

// node.js가 ES6 버전이 나오기 이전부터 모듈화 시스템을 사용하고 있었음
// node.js가 기본적으로 사용하던 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음
// ES6가 발표되면서 import/export를 지원하게 됨
// 기본 방식은 CommonJS로 사용되고 ES6방식을 사용하려면 확장자를 .mjs를 사용하거나 package.json에서 "type":"module"을 추가해줘야 함

console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());
console.log(`첫번째 숫자 ${num1}, 두번째 숫자 ${num2} 의 합 : ${sum()}`);
console.log(`첫번째 숫자 ${num1}, 두번째 숫자 ${num2} 의 차 : ${sub()}`);