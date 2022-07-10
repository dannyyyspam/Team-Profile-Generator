const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call parent constructor here:
        super(name, id, email);

        this.githubUsername = githubUsername;
    }
    getGithubUsername() {
        return this.githubUsername;
    }
}

module.exports = Engineer;