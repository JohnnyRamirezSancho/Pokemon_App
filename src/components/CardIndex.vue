<script setup>
import FileVue from "./File.vue";

const props = defineProps({
  pokemonObj: {
    type: Object,
  },
});

function showFileHero(id) {
  const visorFile = document.getElementById(id);
  visorFile.classList.remove("invisible");
}
</script>

<template>
  <li>
    <figure>
      <img
        :src="pokemonObj.sprites.front_default"
        @click="showFileHero(pokemonObj.name)"
      />
    </figure>
    <div class="contentPokemon">
      <h3>{{ pokemonObj.name }}</h3>
      <p v-for="clase in pokemonObj.types" :class="clase.type.name">
        {{ clase.type.name }}
      </p>
    </div>
    <FileVue :id="pokemonObj.name" :pokemon="pokemonObj"></FileVue>
  </li>
</template>

<style scoped>
li {
  min-width: 190px;
  border: 1px solid #000000;
  overflow: hidden;
  transition: all 0.4s;
}

img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: all 0.4s;
}
img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

h3 {
  font-size: 16px;
  color: #2970fe;
  text-transform: uppercase;
  padding: 10px;
}

p {
  margin: 10px 30px;
  background: #999;
  text-align: center;
  border-radius: 10px;
  padding: 4px 0;
}

.grass {
  background: #9bcc50;
}
.poison {
  background: #b97fc9;
}
.fire {
  background: #fd7d24;
}
.water {
  background: #4592c4;
}
.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
.bug {
  background: #729f3f;
}
/* Normal: #a4acaf
Eléctrico: #eed535
Hada: fdb9e9
Lucha: #d56723
Psíquico: #f366b9
Roca: #a38c21
Hielo: #51c4e7
Fantasma: #7b62a3
Acero: #9eb7b8
Siniestro: #707070

Tierra: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)
Dragón: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%) */

@media (max-width: 500px) {
  li {
    border: none;
    border-radius: 0;
    margin-bottom: 50px;
  }
}
</style>
