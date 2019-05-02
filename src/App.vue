<template>
  <v-app id="app">
    <Header/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    data () {
      return {

      }
    }
  }
</script>
<style lang="scss">

  @import 'assets/davidson-graphic-charter';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
</style>
