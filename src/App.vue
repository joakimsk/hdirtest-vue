// App.vue

<template>
  <div id="app">
    <CovidTracker />
  </div>
</template>

<script>
import CovidTracker from './components/CovidTracker.vue'

export default {
  name: 'app',
  components: {
    CovidTracker
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