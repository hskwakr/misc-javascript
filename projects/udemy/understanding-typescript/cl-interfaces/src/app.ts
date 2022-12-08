class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployees("Max");
accounting.addEmployees("Manu");

// accounting.employees[2] = "Anna"; // error

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // error

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
