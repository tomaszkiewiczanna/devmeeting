<template>
  <div class="home">
    <h1>Are you happy today?</h1>
    <!-- <BaseInput /> -->
    <form action="">
        <VoteOptions>
          <template #options="{mood}">
            <img :src="mood.img" class="home__doggo">
            <h3>{{mood.name}}</h3>
          </template>
        </VoteOptions>
      <BaseButton v-on:click.native="clickButton" :loading="loading">
        <span v-if="loading"><img src="/img/rolling.svg" alt=""></span>
        <span v-else>Click me!</span>
      </BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    clickButton() {
      this.loading = !this.loading
    }
  },
}
</script>
<style lang="scss">
  .home {
    height: 100vh;
    padding-top:100px;

    &__doggo {
      width: 250px;
      height: 250px;
      filter: grayscale(1);
    }
  }
</style>
