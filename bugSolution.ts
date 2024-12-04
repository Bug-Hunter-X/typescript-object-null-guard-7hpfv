function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}

function printNameSolution(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase()); // No error here
  }
}

function printNameSolution2(name: string | null): void {
  if (name) {
    console.log((name as string).toUpperCase()); //Using type assertion
  }
} 