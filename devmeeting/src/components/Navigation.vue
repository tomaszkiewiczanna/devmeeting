<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/vote">Vote</router-link>
    <router-link to="/score">Score</router-link>
    <router-link to="/settings">Settings</router-link>
    </div>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style lang="scss">
.nav {
  a {
    font-weight: 600;
    color: rgb(140, 180, 153);
    text-decoration: none;
    transition: 0.3s;
    margin-top: 30px;
    font-size: 20px;
    &:hover {
      color: rgb(106, 107, 202);
    }
  }
}
</style>


