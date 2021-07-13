const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
jest.mock("../lib/Employee");

//school, getSchool(), and getRole() overridden to return "Intern"

test("retrieve intern's school", () => {
    const school = "University of Toronto";
    const newIntern = new Intern(Employee.name, Employee.id, Employee.email, school);

    expect(newIntern.school).toBe(school);
});

test("retrieve value using getSchool method", () => {
    const testSchool = "University of Toronto";
    const newIntern = new Intern(Employee.name, Employee.id, Employee.email, testSchool);

    expect(newIntern.getSchool()).toBe(testSchool);
});

test("retrive role using getRole method", () => {
    const returnValue = "Intern";
    const newIntern = new Intern(Employee.name, Employee.id, Employee.email, "University of Toronto");

    expect(newIntern.getRole()).toBe(returnValue);
});
