import { defineStore } from "pinia";

export const useHeroeStore = defineStore({
  id: "heroes",
  state: () => ({
    heroes: [],
  }),
  actions: {
    async fetchHeroes() {
      await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          this.heroes = data;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
});

