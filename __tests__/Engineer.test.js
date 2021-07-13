const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

//test if mock employee works
console.log(new Employee());

test("retrieve github", () => {
    const testGithub = "RickyGit";
    const newEngineer = new Engineer(Employee.name, Employee.id, Employee.email, testGithub);

    expect(newEngineer.github).toBe(testGithub);
});

test("retrieve github with getGitHub method", () => {
    const testGithub = "RickyGit";
    const newEngineer = new Engineer(Employee.name, Employee.id, Employee.email, testGithub);

    expect(newEngineer.getGithub()).toBe(testGithub);
});

test("testing getRole method", () => {
    const returnValue = "Engineer";
    const newEngineer = new Engineer(Employee.name, Employee.id, Employee.email, "RickyGit");

    expect(newEngineer.getRole()).toBe(returnValue);
});