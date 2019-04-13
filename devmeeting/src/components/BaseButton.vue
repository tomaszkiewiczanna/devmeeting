<template>
  <button :disabled="loading" class="base-button">
    <slot/>
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
