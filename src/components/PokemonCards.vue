<script setup>
const props = defineProps({
  pokemonObj: {
    type: Object,
  }
});
</script>

<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="pokemonObj.sprites.front_default">
    </figure>
    <div class="card__properties">
      <p>{{ pokemonObj.name }}</p>
      <p v-for="(type) in pokemonObj.types" :class="type.type.name">{{ type.type.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.poison {
  background-color: aqua;
}

.grass {
  background-color: green;
}

.fire {
  background-color: red;
}
</style>