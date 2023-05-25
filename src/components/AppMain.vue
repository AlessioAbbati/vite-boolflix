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
      <div>
        <h1>Movies</h1>
      </div>
     <div class="movies">
        <app-movies
         v-for="movie in store.ArrMovies"
         :key="movie.id"
         :dataMovie="movie"
        />
     </div>
     <div>
        <h1>Tv-Series</h1>
     </div>
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
    background-color: #7D7B7A;
    display: flex;
    flex-wrap: wrap;
    .movies {
      display: flex;
      overflow-x: scroll;
    }
    .tv-series {
      display: flex;
      overflow-x: scroll;
    }
}
  
</style>

