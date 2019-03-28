<template>
  <v-app light>
    <v-content>
      <section>
        <Cover/>
      </section>

      <section>
        <Catalog/>
      </section>

      <section>
        <v-parallax :src="require('@/assets/cover2.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center" style="font-size: 30px;">Vous avez un besoin ?</div>
            <em style="font-size: 19px;">Venez discuter avec nous !</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Demander une mise en relation
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Davidson Consulting SI Nord ?</div>
                </v-card-title>
                <v-card-text>
                  Créée en 2005, Davidson SI Nord est une société de conseil en management et expertise technologique. <br>
                  <br>
                  Nous sommes présents dans 8 pays repartis en Europe, aux Emirats Arabes Unis et en Amérique du Nord.
                  <br><br>
                  Pilotage de projet et coaching technique sont nos métiers avec une spécialisation sur 3 grandes composantes du SI :
                  <br>
                  • Le e-commerce
                  <br>
                  • Mobilité / Front Web
                  <br>
                  • Innovation, Big Data et Objets Connectés
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Nous contacter ?</div>
                </v-card-title>
                <v-card-text>
                  Notre agence est situé dans la région Lilloise.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+33 (0)3.66.72.89.24</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        12, place Saint Hubert, 59000 Lille
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>remi.lejeune@davidson.fr</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


    </v-content>
  </v-app>
</template>

<script>
    import Cover from "./Cover";
    import Catalog from "./Catalog";

    export default {
        name: "Home",
        components: {
            Catalog,
            Cover
        },
        data: () => ({

        })
    }
</script>

<style>

</style>
