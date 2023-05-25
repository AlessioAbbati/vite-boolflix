<script>
import LangFlag from 'vue-lang-code-flags'
export default {
  methods: {
    convertVote(vote) {
      // Calcola il voto da 1 a 5
      const convertedVote = Math.ceil((vote / 10) * 5);

      return convertedVote;
    },
  },
  components: {
    LangFlag,
  },
  props: {
    datatv: Object,
  },
};
</script>

<template>
  <div class="serie">
    <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + datatv.poster_path" alt=""></div>
    <div class="text">
      <div class="title">Titolo: {{ datatv.name }}</div>
      <div class="original" v-show="datatv.original_title !== datatv.title">Titolo originale: {{ datatv.original_name }}</div>
      <div class="lang">
        <span>lingua originale: </span>
        <lang-flag :iso='datatv.original_language' />
      </div>
      <span>voto: </span>
      <font-awesome-icon 
        v-for="star in convertVote(datatv.vote_average)" 
        :key="star" 
        :icon="['fas', 'star']"
        class="star" 
      />
      <template v-for="star in 5 - convertVote(datatv.vote_average)">
        <font-awesome-icon 
          :key="star" 
          :icon="['far', 'star']" 
          v-if="convertVote(datatv.vote_average) < 5" 
        class="star" 
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serie {
  display: flex;
}
.star {
    color: yellow;
   }
</style>
