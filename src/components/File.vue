<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    default: null
  },
  id: {
    type: String,
    default: null
  }
})

function goInvisible(id) {
  const visor = document.getElementById(id);
  visor.classList.add("invisible")
}
</script>

<template>
  <div :id="id" class="invisible visor">
    <div class="fileDetails">
      <button @click="goInvisible(id)">X</button>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
      <div class="pokemonInformation">
        <h4>{{ pokemon.name }}</h4>
        <p v-for="(type) in pokemon.types">{{ type.type.name }}</p>
     </div>  
    </div>  
  </div>    
</template>

<style scoped>
.visor {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10000git ad1;
  position: fixed;
}

.fileDetails {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 30px 90px 30px 30px;
  position: relative;
  display: flex;
}

button {
  position: absolute;
  top: 30px;
  right: 30px;
  display: inline-block;
  background-color: #ff9801;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: 3px solid #ff9801;
}

button:hover {
  border: 3px solid #ff9801;
  background-color: #fff;
  color: #ff9801;
}

.fileDetails p {
  color: #000;
  margin: 5px;
}

.invisible {
  display: none;
}

.pokemonInformation {
  margin: 0 0 30px 30px;
  overflow: auto;
  width: 100%;
}

h4 {
  font-size: 24px;
  color: #ff9801;
  font-family: "Zen DOts";
}

h4 span {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  color: #000000;
  font-style: italic;
}

@media (max-width:900px) {
  .fileDetails {
    flex-direction: column;
    overflow: auto;
    margin: 0 60px 0 0;
  }

  .pokemonInformation {
    margin: 0 0 0 0;
    overflow: initial;
    width: auto;
  }

  .fileDetails img {
    width: 100%;
    aspect-ratio: 1/0.5;
    object-fit: cover;
  }

  h4 {
    margin-top: 20px;
  }
}
</style>