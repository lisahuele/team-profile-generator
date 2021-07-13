const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
jest.mock("../lib/Employee");

test("retrieve manager's office number", () => {
    const testOfficeNumber = 104;
    const newManager = new Manager(Employee.name, Employee.id, Employee.email, testOfficeNumber);

    expect(newManager.officeNumber).toBe(testOfficeNumber);
});

test("retrive role using getRole method", () => {
    const returnValue = "Manager";
    const newManager = new Manager(Employee.name, Employee.id, Employee.email, 104);

    expect(newManager.getRole()).toBe(returnValue);
});
