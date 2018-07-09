var Person = require("../../src/practice_7/person.js");
class Teacher extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + (!this.klass ? ' I am a Teacher. I teach No Class.' : ' I am a Teacher. I teach Class ' + this.klass.number + '.');
    }

    introduceWith(student) {
        return super.introduce() + ' I am a Teacher. I ' + ((this.klass && this.klass.number === student.klass.number) ? '' : "don't ") + 'teach ' + student.name + '.';
    }
}

module.exports = Teacher;
