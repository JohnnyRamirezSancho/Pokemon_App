<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import PokemonCards from "../components/PokemonCards.vue";
import ListpokemonsVue from "../components/favorites/Listpokemons.vue";
import { usePokemonDetailStore } from "@/stores/detailStore.js";

const detailStore = usePokemonDetailStore();
</script>
<template>
  <HeaderPage />

  <main>
    <div v-for="pokemon in detailStore.pokemonDetails" :key="pokemon.id">
      <StarsRating />
      <PokemonCards :pokemon="pokemon" />
    </div>
    <div v-if="detailStore.pokemonDetails.length > 0"></div>
    <div v-else>
      <p class="card__p">No has añadido ningún pokemon a favoritos</p>
    </div>
    <ListpokemonsVue />
  </main>
  <div class="containerFooter">
    <FooterPage />
  </div>
</template>

