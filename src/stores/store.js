import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemons",
  state: () => ({
    pokemons: [],
  }),
  actions: {
    async fetchPokemons() {
      await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          this.pokemons = data;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
});

