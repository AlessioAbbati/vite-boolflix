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
    <div class="image_container">
      <img v-if="datatv.poster_path" :src="'http://image.tmdb.org/t/p/w342/' + datatv.poster_path" :alt="datatv.poster_path">
      <img class="not_av" v-else src="https://www.fiaba.net/wp-content/uploads/2020/01/Non-disponibile-verde.jpg" alt="">
    </div>
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
      <img :src="'http://image.tmdb.org/t/p/w342/' + datatv.backdrop_path" alt="">
      <div class="overview">Overview: {{ datatv.overview }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   .serie {
    position: relative;
    width: 342px;
    height: 517px;
    margin: 1rem;
    .image_container {
      border-radius: 2rem;
      border: 1px solid red;
      img {
      width: 342px;
      height: 517px;
      border-radius: 2rem;
    }
    }
    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(255, 255, 255, 0.9);
      transition: opacity 0.3s ease;
      overflow-y: scroll;
      border-radius: 2rem;
      text-align: center;
      &::-webkit-scrollbar {
        background: transparent;
        width: .1px;
      }
      .star {
        color: yellow;
      }
    }
    
  }
  .serie:hover .text {
  opacity: 1;
}
  .serie .image_container {
  position: relative;
}

.serie .image_container img {
  transition: opacity 0.3s ease;
}

.serie:hover .image_container img {
  opacity: 0;
}
</style>