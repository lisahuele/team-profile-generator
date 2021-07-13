const Employee = require("../lib/Employee");

test("Create a new employee", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
});

test("Retrieve name of employee name, id, and email", () => {
    const name = "Ricky";
    const id = 1;
    const email = "rickyricks@email.com";

    const newEmployee = new Employee(name, id, email);
    expect(newEmployee.name).toBe(name);
    expect(newEmployee.id).toBe(id);
    expect(newEmployee.email).toBe(email);
});

//testing each method can return its correct value
test("retrieve name with getName() method", () => {
    const testName = "Ricky";

    const newEmployee = new Employee(testName);
    expect(newEmployee.getName()).toBe(testName);
});

test("retrieve name with getId() method", () => {
    const testId = 1;

    const newEmployee = new Employee("Ricky", testId);
    expect(newEmployee.getId()).toBe(testId);
});

test("retrieve name with getEmail() method", () => {
    const testEmail = "rickyricks@email.com";

    const newEmployee = new Employee("Ricky", 1, testEmail);
    expect(newEmployee.getEmail()).toBe(testEmail);
});

test("retrieve role with getRole() method", () => {
    const returnValue = "Employee";

    const newEmployee = new Employee("Ricky", 1, "rickyricks@email.com");
    expect(newEmployee.getRole()).toBe(returnValue);
});