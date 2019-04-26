<template>
  <v-app light>
    <v-content>
      <section>
        <Cover_Blog/>
      </section>
    </v-content>
  </v-app>
</template>

<script>

    import Cover_Blog from "./Cover_Blog";

    export default {
        name: "Home",
        components: {
          Cover_Blog
        },
        data: () => ({

        })
    }
</script>

<style>

</style>
