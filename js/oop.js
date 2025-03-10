const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .bio() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    };
    this.greeting = function () {
        return `Hello, my name is ${this.name.firstName} ${this.name.lastName}.`;
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
let person3 = new Person("John", "Doe", 25, "Male", ["gaming", "coding", "traveling"]);

/* STEP 3a: Build the complete constructor for the object Person (already included above). */

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person4 = new Person("Jane", "Smith", 22, "Female", ["reading", "yoga", "painting"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car */
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";
car.year = 2022;
car.getDetails = function () {
    return `This car is a ${this.year} ${this.brand} ${this.model}.`;
};

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.getDetails() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
output.textContent = anotherCar.brand; // Outputs "Honda"

/* LAB 3: Create a JavaScript function that permits the creation of a hamburger object */
function Hamburger(bunType, cheese, sauce, patty, toppings, size) {
    this.bunType = bunType;
    this.cheese = cheese;
    this.sauce = sauce;
    this.patty = patty;
    this.toppings = toppings;
    this.size = size;
    this.description = function () {
        return `You have ordered a ${this.size} burger with a ${this.bunType} bun, 
        ${this.patty} patty, ${this.cheese} cheese, ${this.sauce} sauce, and toppings: ${this.toppings.join(", ")}.`;
    };
}

/* Create a new hamburger object */
let myBurger = new Hamburger("sesame", "cheddar", "BBQ", "beef", ["lettuce", "tomato", "pickles"], "double");

/* Output the description of the burger */
output2.textContent = myBurger.description();
