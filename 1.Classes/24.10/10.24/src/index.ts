// const num: number = 1;
// console.log(num);

// const obj: object = {
//   name: "Jullien",
//   age: 20,
// };

// obj.name = "Peter";

type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}은 관리자입니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}은 멤버이며, ${user.point}를 적립했습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}은 게스트이며, ${user.visitCount}번 오셨습니다.`
      );
      break;
    }
  }
  // if ("kickCount" in user) {
  //   console.log(`${user.name}은 관리자입니다.`);
  // } else if ("point" in user) {
  //   console.log(`${user.name}은 멤버이며, ${user.point}를 적립했습니다.`);
  // } else {
  //   console.log(`${user.name}은 게스트이며, ${user.visitCount}번 오셨습니다.`);
  // }
};
