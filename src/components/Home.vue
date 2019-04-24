<template>
  <v-app light>
    <v-content>
      <section>
        <Cover/>
      </section>
      <section>
        <Catalog
          v-bind:showCheckbox="false">
        </Catalog>
      </section>
      <section>
        <Relation/>
      </section>
      <section>
        <Contact/>
      </section>
    </v-content>
  </v-app>
</template>

<script>
    import Cover from "./Cover";
    import Catalog from "./Catalog";
    import Contact from "./Contact";
    import Relation from "./Relation";

    export default {
        name: "Home",
        components: {
          Cover,
          Catalog,
          Relation,
          Contact
        },
        data: () => ({

        })
    }
</script>

<style>

</style>
