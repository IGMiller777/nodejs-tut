function User(name, age) {

    this.name = name;
    this.age = age;

    this.displayInfo = function () {
        console.log(this.name + 'KKKK' + this.age);
    }
}

User.prototype.sayHi = function () {
    console.log('Hello' + this.name);
}

module.exports = User;