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
       
        <i
          class="fa-regular fa-heart icon-heart"
          v-on:click="sendPokemonFavorite()"
        ></i>
      </figure>
        <div class="card__properties">
          <p>{{ pokemonObj.name }}</p>
          <p v-for="(type) in pokemonObj.types">{{ type }} </p>
        </div>
      
    </div>
  </template>
  
  <style lang="scss" scoped>
  .card__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20em;
  
    .card__img {
      width: 75%;
      height: 70%;
  
      img {
        border-radius: 10px;
        height: 100%;
      }
    }
  
    .card__properties {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-top: 1rem;
      font-size: 1em;
      .properties__name {
        font-weight: bold;
        color: black;
      }
    }
  
    .properties__container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 1rem;
      font-weight: bold;
      color: black;
  
      .properties__property {
        padding: 0.2em 0.3em;
        border-radius: 5px;
      }
      .properties__property-power {
        background: orange;
      }
      .properties__property-speed {
        background: grey;
      }
  
      .properties__property-strength {
        background: rgba(255, 0, 0, 0.719);
      }
    }
  }
  .icon-heart {
    font-size: 2rem;
    color: white;
    position: relative;
    left: 36%;
    bottom: 95%;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  
  @media (max-width: 1500px) {
    .card__container {
      width: 13em;
    }
  }
  
  @media (max-width: 800px) {
    .card__container {
      width: 11em;
    }
  }
  
  @media (max-width: 400px) {
    .card__container {
      width: auto;
    }
  }
  </style>
  