//테스트를 위해 정보,데이터가 넘어가는지 알기위해
// alert('hello!!');//경고창(알림) 디자인은 각 브라우저마다 다르다
// console.log('2번째줄');//오류를 찾기위해 표시
// prompt('이름을 작성해 주세요', '박서희');//사용자에게 값을 받아오기 위해
// console.log('콘솔은 알림이 아닙니다. 개발자를 위합니다');
// document.write('화면에 출력하기');
//console.log의"" ''안의 내용은 문자로 인식한다
// console.log("3" - "2");
// console.log(3 - 2);
// var num = 3 - 2;
// console.log("3-2 = " + num);
// var num = 5 -1;
// confirm("바꾸시겠습니까?");
/*여러줄 주석*/
//한줄주석
//(O)되는것
// var let const 3가지 다 동일
// var oneTwo //두단어 연결>대문자를 사용한 낙타모양 표기
// var one_two //두단어 연결
// var one2;
// var _one_two;
// var $one_two;
// //(X)안되는것
// var 1two(X)//숫자로 시작하면 안됨
// var @one_two(X)//특수문자 안됨
// var let = "3-2"(X);//예약어 사용 금지

// let myTime = "우리는 9시20분 부터 수업 시작이다."//변수
// console.log("변수 : "+ myTime);//변수 선언을 할때는 ''를 사용하면 안된다
// console.log("문자열 : " + "myTime");//문자열일때 ''표가 꼭 필요함
// alert("변수 : "+ myTime);//변수 선언을 할때는 ''를 사용하면 안된다
// alert("문자열 : " + "myTime");//문자열일때 ''표가 꼭 필요함

// let yourAge = prompt("몇살이신가요?", "22살");
// document.write("당신의 나이는 : " + yourAge + "살 입니다.");

const presentYear = 2022;//변하자 않는 값
let bornYear = prompt("몇년생이신가요?", "1996");//변수1
let yourAge = presentYear - bornYear + 1;//변수2
document.write("당신의 나이는" + yourAge + "세 입니다")