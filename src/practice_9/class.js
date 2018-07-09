class Class {
    constructor(klass) {
        this.number = klass;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }
    
    assignLeader(leader) {
        if (leader.klass.equal(this)) {
            this.leader = leader;
        } else {
            console.log("It is not one of us.");
        }
    }
    
    equal(klass) {
        return this.number === klass.number;
    }

    appendMember(student) {
        student.klass = this;
    }
}

module.exports = Class;
