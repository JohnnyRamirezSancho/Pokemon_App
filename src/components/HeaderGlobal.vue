<script setup>
const props = defineProps({
  textHOne: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <h1>{{ textHOne }}</h1>
    <img src="../assets/img/pokemon-header.png" :alt="textHOne">
  </header>
</template>

<style scoped>
img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>