<template>
  <button :disabled="loading" class="base-button">
    <span v-if="loading"><img src="/img/rolling.svg" alt=""></span>
    <span v-else>Click me!</span>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    loading: Boolean,
  }
}
</script>
<style lang="scss">
.base-button {
  border: 2px solid #41796b;
  background: white;
  padding: 10px 30px;
  cursor: pointer;
}
</style>
