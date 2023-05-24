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
     <div class="movies">
        <h1>Movies</h1>
        <app-movies
         v-for="movie in store.ArrMovies"
         :key="movie.id"
         :dataMovie="movie"
        />
     </div>
     
     <div class="tv-series">
        <h1>Tv-Series</h1>
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
    background-color: #7D7B7A;
    .movies {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .tv-series {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  }
  
</style>

