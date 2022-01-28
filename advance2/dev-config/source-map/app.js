class A {
  constructor() {
    this.str = '你好世界！'
  }
  sayHello() {
    console.log(this.str);
  }
}

const a = new A();
a.sayHello()