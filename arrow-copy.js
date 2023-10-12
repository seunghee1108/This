// 함수 이름이 outer라고 명시되어 있다.
// 함수 기명 선언 방식
function outer() {
  return "hello";
}

// 함수 이름이 없고 함수 이름을 대신하는 변수가 있다.
// 이름이 있는 것처럼 쓰이지만 이름이 없다.
// 대입으로 대체 된다 = 익명 함수, 함수 리터럴 
// 함수 익명 선언 방식
const outerTwo =  function() {
  return "bye";
}

// 화살표 arrow 함수 
const outerThree = () => "wow";


// 매개변수 추가한 함수
const outerFour = a => a;


// * 함수 선언 방식이 네가지가 있다.(작성법만 차이가 있음)
// * 익숙해질수록 코드 양이 줄어든다.
// * 자주 보는 방법밖에 없다.


console.log(outer());
console.log(outerTwo());
console.log(outerThree());
