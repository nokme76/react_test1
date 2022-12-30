// Promise.js

// 자바스크립트에서 비동기 처리를 하기 위해서 사용하는 객체
// 자바스크립트는 기본적으로 1 쓰레드 비동기 처리 방식을 사용하고 있음
// 자바스크립트에서 순차적으로 실행을 하고 싶을 경우 콜백 함수를 이용하여야 함
// 순차적으로 실행할 것이 많아지면 콜백지옥이라고 불리는 형태가 만들어지게 됨

// Promise 에는 pending, fulfilled, rejected 3가지 상태가 존재함
// pending : 대기 상태, 비동기 함수가 실행되고, 아직 처리가 완료되지 않은 상태
// fulfilled : 완료 상태, 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부 상태, 비동기 함수가 실행된 후 오류가 발생한 상태

// Promise 실행 시 콜백함수가 실행되고, 해당 콜백함수의 매개변수로 resolve(), reject() 라는 함수를 제공함
// resolve(매개변수) : Promise 실행 후 fulfilled 상태일 경우 실행하는 함수로 나중에 then() 함수를 제공함
// reject(매개변수) : Promise 실행 후 rejected 상태일 경우 실행하는 함수로 나중에 catch() 함수를 제공함

// Promise에는 완료 및 오류 처리를 위해서 then(), catch()함수를 제공하고 있음
// then(매개변수) : 비동기 함수 실행이 완료된 후 실행되는 함수
// catch(매개변수) : 비동기 함수 실행이 거부된 후 실행되는 함수

// 사용법
// ---------------선언부---------------------
// function Promise를 사용할 함수명(매개변수){
// return new Promise(function(resolve,reject){
//                      비동기 통신 소스....
//                      비동기 통신 결과에 따라 resolve(), reject();
// });
//}


// ------------실행부------------
// Promise를 사용한 함수명()
// .then(function(매개변수){
//       성공 시 실행할 내용
// })
// .catch(function(매개변수){
//       실패 시 실행할 내용
// })

import React from "react";
import $ from 'jquery';

// Promise 객체를 사용할 함수 선언부
function getData(){
    return new Promise(function (resolve, reject){
       const data = 100;
       resolve(data);
       // reject(data);
    });
}

// resolve() 실행시 .then() 실행
// reject() 실행시 .catch() 실행
// 함수 실행부
getData()
    .then(function (data){
        console.log(`Promise 사용 반환값 ${data}`);
    })
    .catch(function (err){
        console.log(`Promise 사용 오류시 출력 :${err}`);
    })

const getData1 = () => new Promise((resolve, reject) => {
    $.ajax({
       url: 'http://localhost:8080/async/data1',
       type: 'post',
       success: data => {console.log('통신 성공'); resolve(data)},
       error: () => {reject('오류 발생');}
    });
});

// getData1().then(data => console.log(data)).catch(err => console.log(err));

export {getData,getData1};