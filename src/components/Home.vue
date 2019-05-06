<template>
  <v-app light>
    <v-content>
      <section>
        <Cover/>
      </section>
      <section>
        <PreviewBlog></PreviewBlog>
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
        <Testimony/>
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
    import Testimony from "./Testimony";
    import Relation from "./Relation";
    import PreviewBlog from './PreviewBlog';

    export default {
        name: "Home",
        components: {
          Cover,
          Catalog,
          Relation,
          Testimony,
          Contact,
          PreviewBlog
        },
        data: () => ({

        })
    }
</script>

<style>

</style>
