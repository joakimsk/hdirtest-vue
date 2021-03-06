// App.vue

<template>
  <div id="app">
    <Health />
  </div>
</template>

<script>
import Health from './components/Health.vue'

export default {
  name: 'app',
  components: {
    Health
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>