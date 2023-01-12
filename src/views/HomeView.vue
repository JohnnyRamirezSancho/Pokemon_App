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
      :pokemonObj = pokemon 
        />
  </main>
</template>

