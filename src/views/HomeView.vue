<script setup>

import PokemonCards from "../components/PokemonCards.vue";

import { onBeforeMount } from "vue";
import { usePokemonStore } from "../stores/store.js";

const pokemonsStore = usePokemonStore();

onBeforeMount(() => {
  getPokemons();
});

// METHODS
const getPokemons = async () => {
  await pokemonsStore.fetchPokemons();
};
</script>

<template>
  
  <main>
    <PokemonCards
      v-for="pokemon in pokemonsStore.pokemons"
      name= pokemon.results.name
      
    />
  </main>

</template>

<style lang="scss">
main {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 60%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1em;
}

@media (max-width: 1500px) {
  body {
    background-color: red;
  }
}

@media (max-width: 1200px) {
  main {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 400px) {
  main {
    width: 80%;
    grid-template-columns: 1fr;
  }
}
</style>
