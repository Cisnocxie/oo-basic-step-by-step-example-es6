var Person = require("../../src/practice_8/person.js");
class Student extends Person{
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ' I am a Student. I am ' + (this.klass.leader && this.equal(this.klass.leader) ? 'Leader of' : 'at') +' Class ' + this.klass.number + '.';
    }

    equal(student) {
        return this.name === student.name;
    }
}

module.exports = Student;
