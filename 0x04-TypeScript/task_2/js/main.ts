// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implementations
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function
type Employee = Director | Teacher;

function createEmployee(salary: number | string): Employee {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  return new Director();
}

// Example usage to visualize types in console
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee("$500").constructor.name); // Director

// Type predicate to check if an employee is a Director
export function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

function isTeacher(employee: Employee): employee is Teacher {
  return employee instanceof Teacher;
}

// Execute the appropriate work based on employee type
export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  if (isTeacher(employee)) {
    return employee.workTeacherTasks();
  }
  return "";
}

// Expected results
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
