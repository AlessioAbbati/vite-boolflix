<script>
export default {
    data() {
        return {

        }
    },
};
</script>

<template>
  <div class="header">
    <h1>BOOLFLIX</h1>
    <div class="search">
        <input type="text">
        <button>Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   .header {
    background-color: black;
    height: 6rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: red;
    }
    .search {
        button {
            padding: .3rem;
            color: black;
            background-color: red;
            margin-left: 1rem;
        }
    }
    }
</style>