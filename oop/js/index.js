//-OBJECT LITERAL----------------------------------------------------------

let carex = {}; //empty object
let car = {color : "blue", model:"innova", capacity:10};
/*
{color : "blue", model:"innova", capacity:10}; 
= tawag don ay OBJECT LITERAL
*/

document.write("<h1>OBJECT LITERAL</h1>");
document.write("<h2>" + car.model + "</h2>");
//mas mahirap na way para mag document.write

document.write(`<h2>${car.color}</h2>`); 
/* 
` = backtick = template expression, alterantive for concatination mas madali kesa sa taas 
${} = para matawag yung object na ginawa mo
*/
document.write(`<h2> The color of ${car.model} is ${car.color} and the capacity is ${car.capacity}</h2>`);

//-FACTORY FUNCTIONS----------------------------------------------------------

function createCar(model, color, capacity)
{
    let car = {};
    car.model = model; // instance variable (belongs to the car object) = variable 
    car.color = color;
    car.capacity = capacity;
    
    return car;
}

document.write("<h1>FACTORY FUNCTIONS</h1>");
let toyota = createCar("innova", "red", 8);
document.write(`<h2> The color of ${toyota.model} is ${toyota.color} and the capacity is ${toyota.capacity}</h2>`);
//ginagamit ung object na toyota

//-CONSTRUCTOR FUNCTION----------------------------------------------------------

function Car(model, color, capacity)
{
    this.model = model;
    this.color = color;
    this.capacity = capacity;

    //this = current obj na ginawa mo
}

let c1 = new Car("fortuner", "gray", 11);
document.write("<h1>CONSTRUCTOR FUNCTIONS</h1>");
document.write(`<h2> The color of ${c1.model} is ${c1.color} and the capacity is ${c1.capacity}</h2>`);

//-ES6 CLASS SYNTAX----------------------------------------------------------

class Cars
{
    constructor(model, color, capacity) //parameters ung model, color stuff
    {
        this.model = model;
        this.color = color;
        this.capacity = capacity;
    }
}

document.write("<h1>ES6 CLASS SYNTAX</h1>");
let c2 = new Cars("vios", "blue", 6); //pag may new keyword , maiinvoke yung constructor
document.write(`<h2> The color of ${c2.model} is ${c2.color} and the capacity is ${c2.capacity}</h2>`);


