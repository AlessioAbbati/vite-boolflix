<script>
export default {
    props: {
        datatv: Object,
    },
    methods: {
    convertVote(vote) {
      // Calcola il voto da 1 a 5
      const convertedVote = Math.ceil((vote / 10) * 5);

      return convertedVote;
    },
  } 
}
</script>

<template>
  <div class="serie">
    <div class="img"><img :src="'http://image.tmdb.org/t/p/w342/' + datatv.poster_path" alt=""></div>
    <div class="text">
      <div class="title">Titolo: {{ datatv.name }}</div>
      <div class="original">Titolo originale: {{ datatv.original_name }}</div>
      <div class="language">Lingua: {{ datatv.original_language }}</div>
      <span>voto: </span>
      <font-awesome-icon v-for="star in convertVote(datatv.vote_average)" :key="star" :icon="['fas', 'star']"
        class="star" />
      <template v-for="star in 5 - convertVote(datatv.vote_average)">
        <font-awesome-icon :key="star" :icon="['far', 'star']" v-if="convertVote(datatv.vote_average) < 5" class="star" />
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
