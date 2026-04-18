interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Nawaf",
  lastName: "Saleh",
  age: 26,
  location: "Riyadh",
};

const student2: Student = {
  firstName: "Mohammed",
  lastName: "Ahmed",
  age: 30,
  location: "Jeddah",
};

const studentsList: Array<Student> = [student1, student2];

// ---------------- Teacher Interface ----------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Ali",
  lastName: "Hassan",
  fullTimeEmployee: true,
  location: "Riyadh",
  contract: false,
};

const teacher2: Teacher = {
  firstName: "Sara",
  lastName: "Khalid",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Jeddah",
  subject: "Math",
};

// ---------------- DOM Table ----------------
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = thead.insertRow();
const cell1Head: HTMLTableCellElement = rowHead.insertCell();
const cell2Head: HTMLTableCellElement = rowHead.insertCell();

cell1Head.textContent = "firstName";
cell2Head.textContent = "location";

table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

table.append(tbody);
body.append(table);