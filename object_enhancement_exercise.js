// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  //Write an ES2015 Versio

  function createInstructor(firstName, lastName){
      return{
          firstName,
          lastName,
      }
  }

//   var favoriteNumber = 42;

//   var instructor = {
//     firstName: "Colt"
//   }
  
//   instructor[favoriteNumber] = "That is my favorite!"

  //write an ES2015 Version

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite!"
}

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

//write an ES2015 version

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "HI!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

//write an ES2015 version

const d = createAnimal("dog", "bark", "woof!")
d.bark()

const s = createAnimal("sheep", "bleet", "baaa!")
s.bleet()

function createAnimal(species, verb, sound) {
    return {
        species,
        [verb](){
            return sound;
        }
    }
}