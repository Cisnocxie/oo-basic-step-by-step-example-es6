class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old.';
    }

    basic_introduce() {
        return 'My name is Tom. I am 21 years old.';
    }
}

module.exports = Person;

