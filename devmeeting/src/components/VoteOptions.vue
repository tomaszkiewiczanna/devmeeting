<template>
  <ul class="vote-options">
    <slot name="options" v-for="mood in moods" :mood="mood">
      <li :key="mood.name">
        <p>{{mood.name}}</p>
      </li>
    </slot>
  </ul>
</template>
<script>
export default {
  name: 'VoteOption',
  data: () => ({
     moods: [
        {
          name: 'So happy',
          img: '/img/1.jpg'
        },
        {
          name: 'Not so bad',
          img: '/img/2.jpg'
        },
        {
          name: 'Worst day ever',
          img: '/img/3.jpg'
        }
      ],
  })
}
</script>
<style lang="scss">

.vote-options {
  width: 100%;
  display: flex;
  justify-content:space-around;

  li {
    display: flex;
    flex-direction: column;
  }
}
</style>
