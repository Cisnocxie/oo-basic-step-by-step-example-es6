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
            if (Class.notifyAssignLeader) {
                for (let t of Class.notifyAssignLeader) {
                    console.log('I am ' + t.name + '. I know ' + leader.name + ' become Leader of Class ' + this.number + '.');
                }
            }
        } else {
            console.log("It is not one of us.");
        }
    }
    
    equal(klass) {
        return this.number === klass.number;
    }

    appendMember(student) {
        student.klass = this;
        if (Class.notifyJoin) {
            for (let t of Class.notifyJoin) {
                console.log('I am ' + t.name + '. I know ' + student.name + ' has joined Class ' + this.number + '.');
            }
        }
    }

    isIn(student) {
        return this.equal(student.klass);
    }

    registerAssignLeaderListener(teacher) {
        if (Class.notifyAssignLeader === undefined) {Class.notifyAssignLeader = [];}
        Class.notifyAssignLeader.push(teacher);
    }

    registerJoinListener(teacher) {
        if (Class.notifyJoin === undefined) {Class.notifyJoin = [];}
        Class.notifyJoin.push(teacher);
    }
}

module.exports = Class;
