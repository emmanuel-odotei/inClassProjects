/* Create menu object and Add a _courses property to your menu object and set its value to an empty object. 
This property will ultimately contain a mapping between each course and the dishes available to order 
in that course. */
const menu = {
    _courses : {
      appetizers:[],
      mains:[],
      desserts:[],
    },
//Create getter and setter methods for the appetizers, mains, and desserts properties.
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts
    },
/*Create getter method for _courses property in menu 
    return an object that contains key/value pairs for appetizers, mains, and desserts*/
    get courses() {
      return {appetizers: this.appeztizers, mains: this.mains, desserts: this.desserts};
    },
/*create .addDishToCourse() method which will be used to add a new dish to the specified course on the menu.
The method should take in three parameters: the courseName, the dishName , and the dishPrice.
And should create an object called dish which has a name and price which it gets from the parameters.*/

    addDishToCourse (courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
/*The method should then push this dish object into the appropriate 
array in your menu‘s _courses object based on what courseName was passed in.*/
      return this._courses[courseName].push(dish);
    },
/*.getRandomDishFromCourse() will allow us to get a random dish from a course on the menu, 
which will be necessary for generating a random meal.*/
    getRandomDishFromCourse(courseName){
/*Retrieve the array of the given course’s dishes from the menu‘s _courses object and 
store in a variable called dishes.*/
        const dishes = this._courses[courseName];
/*Generate random index with Math.random and multiply by dish length 
(random no. will be b/n 0 and length of array),and round it to a whole number with Math.floor*/

      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
/* .generateRandomMeal() generates 3 course meal
Eg. Create an appetizer variable which should be the result of calling the 
.getRandomDishFromCourse() method when we pass in an appetizers string to it.*/
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
//Calculate total price
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and your total price is ${totalPrice}`;
    }
  };
  //Trying code
  menu.addDishToCourse ('appetizers', 'salad', 4.50);
  menu.addDishToCourse ('appetizers', 'fries', 5.50);
  menu.addDishToCourse ('appetizers', 'thighs', 7.00);
  
  menu.addDishToCourse ('mains', 'rice', 8.00);
  menu.addDishToCourse ('mains', 'soup', 10.00);
  menu.addDishToCourse ('mains', 'beef sauce', 15.00);
  
  menu.addDishToCourse ('desserts', 'lemonade', 6.40);
  menu.addDishToCourse ('desserts', 'ice cream', 3.60);
  menu.addDishToCourse ('desserts', 'candy', 12.30);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);