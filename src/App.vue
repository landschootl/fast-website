<template>
  <v-app>
    <Header/>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
      Header,
      Home
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
  #company-name-text {
    font-weight: 200;
    font-size: 20px;
  }
  #title {
    font-weight: 600;
  }
</style>
