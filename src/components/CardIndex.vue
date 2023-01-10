<script setup>
//   import StarsEvaluationVue from './StarsEvaluation.vue';
//   import { addFavourites } from '@/stores/favouritesList';
//   import FileVue from './File.vue';
//   import { favouritesList } from '../stores/favouritesList';
//   import { useFavouritesList } from '../stores/favouritesList';
//   import { onBeforeMount, ref } from 'vue';
  
//   const favouritesStore = useFavouritesList()
  
//   onBeforeMount(() => {
//     getFavourites()
//   })
  
//   const getFavourites = async () => {
//     await favouritesStore.fetchFavourites()
//   }
  
//   function deleteFavourite(favourite) {
//     let index = favouritesList.indexOf(favourite);
//     if (confirm("Are you sure you want to remove " + favourite.name + " from Favorites?")) {
//       alert(favourite.name + " has been removed.")
//       favouritesList.splice(index, 1);
//       favouritesList[0].name += " ";
//     }
//   }
  
//   function showFileHero(id) {
//     const visorFile = document.getElementById(id)
//     visorFile.classList.remove('invisible')
//   }
  
//   const props = defineProps({
//     id: {
//       type: Number,
//       default: 0
//     },
//     name: {
//       type: String,
//       default: null
//     },
//     images: {
//       type: Object,
//       default: null
//     },
//     powerstats: {
//       type: Object,
//       default: null
//     },
//     heroe: {
//       type: Object,
//       default: null
//     },
//     stars: {
//       type: Number,
//       default: 0
//     }
//   })
  </script>
  
  <template>
    <li>
      <figure>
        <img src="../assets/img/pokemon-header.png" alt="Pokemon">
      </figure>
      <div class="contentPokemon">
        <h3>Bulbasaur</h3>
        <p>Cosas</p>
      </div>
    </li>
  </template>
  
  
  <style scoped>
  li {
    min-width: 190px;
    border: 1px solid #000000;
    overflow: hidden;
    transition: all 0.4s;
  }
  
  li:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  
  h3 {
    font-size: 16px;
    color: #2970FE;
    text-transform: uppercase;
    padding: 10px;
  }

  p {
    margin: 10px 30px;
    background:#999;
    text-align: center;
    border-radius: 10px;
    padding: 4px 0;
  }
  
  @media (max-width:500px) {
    li {
      border: none;
      border-radius: 0;
      margin-bottom: 50px;
    }
  }
  </style>