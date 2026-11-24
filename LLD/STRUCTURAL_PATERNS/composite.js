/**Composite Pattern
1. Concept first
Definition:

The Composite Pattern is a structural design pattern that allows you to treat individual objects and groups of objects uniformly through a common interface.

In simple words: You can work with a single object or a group of objects using the same methods.
Real-world analogy — File System
Think about your computer:
- A file is an individual object.
- A folder can contain files.
- A folder can also contain other folders. */

/**. Coding Challenge — Organization Hierarchy
Requirements only · No solution
File: 04-composite.js

Build an organization structure where a department can contain individual employees or other departments.
Class 1 — Employee
Requirements:
- Constructor accepts name and role.
- Store both properties.
- Implement showDetails() method.
- Print: Employee: {name}, Role: {role}.
Class 2 — Department
Requirements:
- Constructor accepts name.
- Store the department name.
- Initialize an empty members array.
- Implement add(member) method to add an employee or another department.
- Implement showDetails() method:
  - Print: Department: {name}.
  - Loop through all members.
  - Call each member's showDetails() method.
Testing requirements
1. Create two Employee objects:
   - Rahul, Developer
   - Priya, Designer
2. Create a Department named Engineering.
3. Add Rahul and Priya to Engineering.
4. Create another Department named Company.
5. Add Engineering to Company.
6. Call company.showDetails(). */

class Employee {
  constructor({ name, role }) {
    this.name = name;
    this.role = role;
  }
  showDetails() {
    console.log(`Employee: ${this.name}, Role: ${this.role}`);
  }
}
class Department {
  constructor({ name }) {
    this.name = name;
    this.members = [];
  }
  add(employee) {
    this.members.push(employee);
  }
  showDetails(level = 0) {
    const indent = "  ".repeat(level);

    console.log(`${indent}📁 Department: ${this.name}`);

    this.members.forEach((member) => {
      if (member instanceof Department) {
        member.showDetails(level + 1);
      } else {
        console.log(
          `${indent}  👤 Employee: ${member.name}, Role: ${member.role}`,
        );
      }
    });
  }
}
const employee1 = new Employee({ name: "Rahul", role: "Developer" });
const employee2 = new Employee({ name: "priya", role: "Desginer" });
const department = new Department({ name: "Engineering" });

department.add(employee1);
department.add(employee2);
// department.showDetails();
const company = new Department({ name: "Company" });
const department2 = new Department({ name: "Billing" });

department.add(employee1);
department.add(employee2);

department2.add(employee1);
department2.add(employee2);
company.add(department);
company.add(department2);

company.showDetails();
