class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployees(employee: string) {
    // this.id = "d2"; // error
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", []);

it.addEmployees("Max");
it.addEmployees("Manu");

// accounting.employees[2] = "Anna"; // error

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReport();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // error

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
