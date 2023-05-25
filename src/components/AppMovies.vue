<script>
import CountryFlag from 'vue-country-flag-next'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    convertVote(vote) {
      // Calcola il voto da 1 a 5
      const convertedVote = Math.ceil((vote / 10) * 5);

      return convertedVote;

    },
  
},
  props: {
    dataMovie: Object,
  },
  components: {
    CountryFlag,
  }
}
</script>

<template>
  <div class="movie">
    <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + dataMovie.poster_path" alt=""></div>
    <div class="text">
        <div class="title">Titolo: {{ dataMovie.title }}</div>
        <div class="original">Titolo originale: {{ dataMovie.original_title }}</div>
        <div class="language">lingua originale: {{ dataMovie.original_language }}</div>
        <span>voto: </span>
        <font-awesome-icon 
         v-for="star in convertVote(dataMovie.vote_average)" 
         :key="star" 
         :icon="['fas', 'star']" 
         class="star"
        />
        <template v-for="star in 5 - convertVote(dataMovie.vote_average)">
          <font-awesome-icon 
            :key="star"
            :icon="['far', 'star']" 
            v-if="convertVote(dataMovie.vote_average) < 5"
            class="star"
          />
        </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   .movie {
    display: flex;
   }
   .star {
    color: yellow;
   }
</style>

