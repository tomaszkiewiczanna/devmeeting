<template>
  <div class="home">
    <h1>HOME!</h1>
    <BaseInput />
    <BaseButton v-on:click.native="clickButton" :loading="loading"/>
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
      console.log('dzialam')
      this.loading = !this.loading
    }
  },
}
</script>
