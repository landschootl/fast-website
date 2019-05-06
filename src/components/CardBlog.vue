<template>
    <v-flex>
        <v-card>
            <v-img
                    class="white--text"
                    height="200px"
                    :src="image"
            >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline near-white-dav">{{title}}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-title>
                <div>
                    <span class="turquoise-dav">Résumé</span><br>
                    <p>{{content}}</p><br>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat class="turquoise-dav">Voir plus</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "CardBlog",
        data : () => ({
            title : "Titre de l'article",
            content : "Conferri dicam citius gentium lustratae cuiusquam nec crebris sermonibus nec regionum terras bellorum sermonibus vero usurpare sed nec citius conficiendi.",
            image : "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        })
    }
</script>

<style scoped>

</style>