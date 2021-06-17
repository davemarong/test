class Pokemon {
  constructor(name, type, gen) {
    this.name = name;
    this.type = type;
    this.gen = gen;
  }
  getPokemonData() {
    return this.type;
  }
}

const pikachu = new Pokemon("pikachu", "electric", 1);
const charmander = new Pokemon();
charmander.name = "Charmander";
console.log(charmander);
console.log(pikachu.getPokemonData());
