<template>
  <v-app>
    <!--<v-toolbar class="white">-->
      <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
    <!--</v-toolbar>-->
    <v-toolbar class="white">
      <v-toolbar-title class="headline text-uppercase">
        <!--<img src="../assets/logo.png" alt="Vuetify.js" height="50"/>-->
        <v-avatar
                :tile="tile"
                :size="40"
        >
          <img src="../src/assets/logofast.png" alt="avatar">
        </v-avatar>
        <span id="title"> {{title}} </span>
        <span id="company-name-text" class="font-weight-light">- by {{company_name}}</span>
      </v-toolbar-title>
      <!--<v-spacer></v-spacer>-->
      <!--<v-toolbar-items class="hidden-sm-and-down">-->
        <!--<v-btn flat>Link One</v-btn>-->
        <!--<v-btn flat>Link Two</v-btn>-->
        <!--<v-btn flat>Link Three</v-btn>-->
      <!--</v-toolbar-items>-->
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      title: "PROJET FAST",
      company_name: "davidson consulting"
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
