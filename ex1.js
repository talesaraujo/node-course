//var person1 = {name: "Fulano", age: 21}
//var person2 = {name: "Beltrano", age: 17}

//person1.age = 11;
//person2.age = 80;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var person1 = new Person("Fulano", 21);
var person2 = new Person("Beltrano", 90);

// Comparison
if (person1.age > person2.age) {
    console.log(person1.name+ " is older than " + person2.name);
}
else if (person1.age < person2.age) {
    console.log(person1.name+ " is younger than " + person2.name);
}
else {
    console.log(person1.name+ " is the same age as " + person2.name);
}


var people = [];

names = ["Fulano", "Beltrano", "Cicrano", "Medrano", "Andano", 
         "Lapidano", "Desinfetano", "Desacostumando", "Iniquetano", "JohnDoeAno"];

ages = [12, 34, 17, 56, 45, 44, 32, 8, 22, 16]


for (var i=0; i < 10; i++) {
    people.push(new Person(names[i], ages[i]));
}


for (var i=0; i < 10; i++) {
    console.log("Person " + (i+1) + ": "+ people[i].name);
}