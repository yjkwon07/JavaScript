// 블록 스코프를 가진다. {}

const a = 0; 
// a => 값을 변경을 못 한다.
// const는 선언 시 부터 값을 할당 해야 한다.
const h = [1, 2, 3, 4, 5];
// ok
h[0] = true;
h[1] = false; 
// no 
h = [1,2, 3, 4,];
// const는 메모리 주소 참조를 하고 있으므로 주소 값을 바꾸지는 못한다.
// const a = 0 => 리터럴 상수
// const a = {a:2, b:3} => 객체 참조(주소)
// 즉, const 키워드를 가진 객체는 주소를 못바꾸지만 가지고 있는 변수의 값을 바꿀 수는 있다.
// const에 객체가 할당된 경우 객체 내부 속성은 바꿀 수 있다.

let b = 0; 
b= 1; 
// 값을 변경 가능하다.
