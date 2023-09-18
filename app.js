const name="Hello Web Programming";

console.log("Lets do this");

function greet() {
    alert("Hello World!");
}

function greet(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

greet("Dr.", "Susan Escobar");

const person = {
    firstName: "Roxanna",
    lastName : "Torres",
    fullName : function() {
      return this.firstName + " person " + this.lastName;
    }
  };