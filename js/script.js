const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//factory funttion and add properties
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, //scale from 1 (refreshed) to 5 (tired)

    //method for sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. ZZZ...`);
      this.isTired = 1;
    },

    //method for playtime
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play.`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//create 5 new objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "cat");
const francine = createPet("Francine", "turtle");

//verify objects & methods
//console.log(sora, clover, baxter, cleo, francine);
clover.sleep();
baxter.play();
//console.log(clover, baxter);

//update properties
clover.isTired = 8;
francine.isTired = 9;

//create array of all pets
const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

//display pets in the browser
const showPets = function (petArray) {
  //enoty string, will clear the list when showPets is run
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species}
    is ${status}.`;
    pets.append(li);
  }
};

//add click event
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
