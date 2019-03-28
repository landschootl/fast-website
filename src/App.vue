<template>
  <v-app>
    <Header/>
    <v-content>
      <Home/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Home from './components/Home'
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
        Header,
        Home,
        Footer
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
