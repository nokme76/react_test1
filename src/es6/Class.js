// Class.js

// ES6에서 부터 자바스크립트에서도 class 키워드를 지원함
// constructor(매개변수) : 자바스크립트 클래스의 생성자, 자바스크립트의 생성자는 이름을 지정 할 수 없음
// extends : 자바스크립트의 클래스도 상속을 지원함

// 클래스 선언
class Shape {
    // 정적(static) 멤버, 클래스명.정적멤버명으로 사용
    static create(x, y) {
        return new Shape(x, y);
    }

    // 멤버 변수 선언, var,let,const 같은 키워드 사용하지 않음
    name = 'Shape';

    // 생성자, 이름을 고정
    // 생성자에서 this.변수명 을 입력 시 멤버 변수가 선언됨
    constructor(x, y) {
        this.move(x, y);
    }

    // 매서드 선언
    move(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

// 자바 식으로 생성하거나
var s = new Shape(0, 0);
s.area();
s.move(100, 200);
console.log(s.name);
console.log(s.x);
console.log(s.y);


// 정적멤버로 선언하나 같음
var s1 = Shape.create(0, 0);
s1.area();
s1.move(10, 20);
console.log(s1.name);
console.log(s1.x);
console.log(s1.y);

//              상속 shape
class Circle extends Shape {
    constructor(x, y, radius) {
        // 부모 x,y 슈퍼
        super(x, y);
        this.radius = radius; // 멤버 변수 생성
    }

    area() {
        if (this.radius == 0) {
            return super.area();
        }

        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
console.log(c.area());

