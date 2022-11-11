class User {
  constructor(public name: string) {}
  public static copy(user: User): User {
    return new User(user.name);
  }
  sayName(this: User) {
    console.log(`Hello my name is ${this.name}`);
  }
}

export default User;
