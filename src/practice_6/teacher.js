var Person = require("../../src/practice_6/person.js");
class Teacher extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + (!this.klass ? ' I am a Teacher. I teach No Class.' : ' I am a Teacher. I teach Class ' + this.klass + '.');
    }
}

module.exports = Teacher;
