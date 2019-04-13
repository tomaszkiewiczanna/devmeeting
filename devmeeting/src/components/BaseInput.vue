<template>
  <div class="base-input">
    <div class="base-input__cont">
      <input id="base-input" v-model="inputText" type="text">
      <label for="base-input">This is my base input</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  data() {
    return {
      inputText: ''
    }
  }
}
</script>
<style lang="scss">
.base-input {
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  &__cont {
    width: 30vw;
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
