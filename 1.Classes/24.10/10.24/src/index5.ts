class Student {
  // Field=인스턴트 객체의 키
  // private name;
  // protected age;
  // public grade;

  // 생성자함수 => field에 매칭될 값을 찾아오는 역할
  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 매서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const studentB = new Student("David", 20, 2);

console.log(studentB);
console.log(studentB.introduce());

class StudentDeveloper extends Student {
  favoriteSkill;
  constructor(name: string, age: number, grade: number, favoriteSkill: string) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  func() {
    // this.name;
    this.age;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍합니다`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
console.log(studentC.programming());

// 접근제어자 3개
// public : 모든 범위에서 접근할 수 있도록(기본 default)
// private : 클래스 내부에서만 접근 가능
// protected: 클래스 내부 &
