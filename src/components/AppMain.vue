<script>
import AppMovies from './AppMovies.vue';
import AppTvSeries from './AppTvSeries.vue';
import { store } from '../store';

export default {
    data() {
        return {
          store,
        }
    },
    components: {
        AppMovies,
        AppTvSeries,
        
    }
}
</script>

<template>
  <div class="contents">
    <h2>Movies</h2>
    <div class="movies">
      <app-movies 
       v-for="movie in store.ArrMovies" 
       :key="movie.id" 
       :dataMovie="movie" 
      />
    </div>
    <h2>Tv-Series</h2>
    <div class="tv-series">
      <app-tv-series 
       v-for="tvserie in store.ArrTvSeries" 
       :key="tvserie.id" 
       :datatv="tvserie" 
      />
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .contents {
    background-color: black;
    h2 {
      color: #DC1A28;
      margin-left: 11rem;
      margin-bottom: 1rem;
      padding-top: 1rem;
    }
    img {
      width: 100%;
    }
    .movies {
      display: flex;
      overflow: auto;
      max-width: 1000px;
      margin: auto;
      &::-webkit-scrollbar {
        background: black;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #DC1A28;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: red;
      }
    }
    .tv-series {
      display: flex;
      overflow: auto;
      max-width: 1000px;
      margin: auto;
      &::-webkit-scrollbar {
        background: black;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #DC1A28;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: red;
      }
    }
}
  
</style>

