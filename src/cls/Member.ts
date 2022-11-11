import User from "./User";

class Member extends User {
  constructor(public name: string, public phone: string) {
    super(name);
  }

  sayPhone(this: Member) {
    super.sayName();
    console.log(`My Phone Number is ${this.phone}`);
  }
}

export default Member;
