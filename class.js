////////////////////////////////////////////////////Hamster//////////////////////////////////////////
class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

  /////////////////////////////Create a Story with your Person class/////////////////////////////////////////
  class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }
  const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp()
}
for(let i =0; i < 5; i++){
  timmy.eat()
}
for(let i =0; i < 5; i++){
  timmy.exercise()
}
for(let i =0; i < 9; i++){
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(let i =0; i < 15; i++){
  timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()

//////////////////////////////////////////Chef Make Dinners////////////////////////////////////////////////
class Dinner {
  constructor(appetizer, entree , dessert){

this.appetizer = appetizer
this.entree = entree
this.dessert = dessert
  }
cook () {
  console.log("humm, it's delicious");
}

}
const newDinner = new Dinner ()




class Chef {
  constructor () {
    this.meal = []
    
  }
  generateMeal () {
    const newDinner = new Dinner ("sweet potato chips","Oriental Chicken Tajine, semolina couscous and vegetables","Lemon Tart");
    this.meal.push(newDinner);
     
  }
  generateMeal1 () {
    const newDinner = new Dinner ("mint and basil","Sauteed Cod Brandade and herbed vegetables","Chocolate Mousse Verrine");
    this.meal.push(newDinner);
     
  }
  generateMeal2 () {
    const newDinner = new Dinner ("Classic coleslaw salad","Chicken Stew Old Style, pilaf rice and butternut squash","Cheese cake with mixed berries coulis or sea salt caramel");
    this.meal.push(newDinner);
     
  }
  }

const eatFood = new Chef();
eatFood.generateMeal()
console.log(eatFood);

const eatFood1 = new Chef
eatFood1.generateMeal1()
console.log(eatFood1);

const eatFood2 = new Chef
eatFood2.generateMeal2()
console.log(eatFood2);
