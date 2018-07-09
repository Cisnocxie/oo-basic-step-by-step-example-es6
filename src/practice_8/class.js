class Class {
    constructor(klass) {
        this.number = klass;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }
    
    assignLeader(leader) {
        if (this.equal(leader.klass)) {
            this.leader = leader;
        }
    }
    
    equal(klass) {
        return this.number === klass.number;
    }
}

module.exports = Class;
