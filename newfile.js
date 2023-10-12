function Student(name, number) {
  // 밑에서의 this는 함수 이름을 말한다.
  // this === studnet
  this.name = name;
  this.number = number;
}
let test = new student("방승희", "3");
console.log(test);

let list = ["이유안", "최성민"];
let studentArr = [];
for(let i = 0; i < list.length; i++){
  studentArr[i] = new Student(list[i], i+1);
}
console.log(studentArr);


// 마치 붕어빵을 찍어내듯이 객체를 만들어낸다 = 생성자 함수  혹은 객체 생성자 
// 쉽게 거푸집(찍어내는 것)이라고 한다. 



// 생성자 함수(객체를 찍어내는) 작업을 할 쓸 때 간접적으로 '가리키기' 위해서 매우 자주 사용
// 직관적이지 않아서 지양하려고 하는 편
// This = 그냥 가리키는 것
// 예측이 불가능하기때문에 console.log 찍어보기

