interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // Allow additional properties like `contract`, etc.
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

type Name = { firstName: string; lastName: string };

// Implementation of printTeacher as a function declaration using destructuring
function printTeacher({ firstName, lastName }: Name): string {
  firstName = firstName.charAt(0);
  return `${firstName}. ${lastName}`;
}

// Adapter to satisfy printTeacherFunction interface signature
const printTeacherAsFn: printTeacherFunction = (firstName, lastName) => printTeacher({ firstName, lastName });

// Example usage
console.log(printTeacherAsFn("John", "Doe"));
