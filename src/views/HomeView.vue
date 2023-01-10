<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import PokemonCards from "../components/PokemonCards.vue";

import { onBeforeMount } from "vue";
import { usepokemonstore } from "../stores/store.js";

const pokemonsStore = usepokemonstore();

onBeforeMount(() => {
  getPokemons();
});

// METHODS
const getPokemons = async () => {
  await pokemonsStore.fetchPokemons();
};
</script>

<template>
  <HeaderPage />
  <main>
    <PokemonCards
      v-for="pokemon in pokemonsStore.pokemons.slice(148, 168)"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </main>

  <FooterPage />
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
    background-image: url(@/assets/FondoHome3.png);
    background-size: 140%;
    background-position: 48% 10%;
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
