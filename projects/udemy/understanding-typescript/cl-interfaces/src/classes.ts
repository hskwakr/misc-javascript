abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe(): void {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployees(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

// console.log(accounting.mostRecentReport); // throw error

accounting.addEmployees("Max");
accounting.addEmployees("Manu");

// accounting.mostRecentReport = ""; // throw error
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

// accounting.printReport();
// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // error

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
