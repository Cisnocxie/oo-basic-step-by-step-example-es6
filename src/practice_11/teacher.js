var Person = require("../../src/practice_11/person.js");
class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        return super.introduce() + (this.klasses === undefined ? ' I am a Teacher. I teach No Class.' : ' I am a Teacher. I teach Class ' + this.klasses.map(klass => klass.number).join(', ') + '.');
    }

    introduceWith(student) {
        return super.introduce() + ' I am a Teacher. I ' + ((this.klasses && this.klasses.find(klass => klass.equal(student.klass))) ? '' : "don't ") + 'teach ' + student.name + '.';
    }
    
    isTeaching(student) {
        return this.klasses.find(klass => klass.isIn(student)) != undefined;
    }
}

module.exports = Teacher;
