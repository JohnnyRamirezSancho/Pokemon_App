<script setup>
import CardIndexVue from '../components/CardIndex.vue'
</script>

<template>
  <main>
    <h2>POKEMONS</h2>
    <div id="filtersAndSearch">
      <div id="search"><a href="#"><img src="../assets/img/icon-search.png" alt="Search" id="iconSearch"></a>
        <input type="text" id="searchPokemon">
      </div>
      <select id="PokemonType">
        <option vale="uno">Select a pokemon type</option>
        <option vale="dos">Dos</option>
        <option vale="tres">Tres</option>
        <option vale="cuatro">Cuatro</option>
      </select>
    </div>
    <ul>
      <CardIndexVue />
      <CardIndexVue />
      <CardIndexVue />
      <CardIndexVue />
      <CardIndexVue />
      <CardIndexVue />
      <CardIndexVue />
    </ul>
  </main>
</template>

<style scoped>
main {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

h2 {
  font-weight: normal;
  font-size: 48px;
  padding-left: 10px;
  display: grid;
  align-items: flex-end;
  margin-bottom: 20px;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
  grid-column: 1 / 3;
}

input,
select,
option {
  background: #2970FE;
  color: #FFCD02;
  font-weight: bold;
  padding: 5px 5px 5px 15px;
  border-radius: 10px;
  height: 39px;
  width: 250px;
  font-family: Ubunto, sans-serif;
  letter-spacing: 1px;
  outline: none;
  margin-bottom: 15px;
}

#filtersAndSearch {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
  margin-bottom: 20px;
}

#search {
  position: relative;
}

#iconSearch {
  position: absolute;
  top: 7px;
  right: 15px
}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width:700px) {
  ul {
    grid-template-columns: 1fr 1fr;
    grid-column: 1 / 2;
  }

  main {
    grid-template-columns: 1fr;
  }

  #filtersAndSearch {
    align-items: center;
  }

  h2 {
    text-align: center;
  }

}

@media (max-width:500px) {
  ul {
    grid-template-columns: 1fr;
  }

  main {
    padding: 0;
  }
}
</style>
