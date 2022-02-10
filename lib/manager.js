const employee = require('./employee');

class manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    officeNumber = this.officeNumber;
  }

  getRole() {
    return this.role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
};

module.exports = manager;