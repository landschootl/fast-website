<template>
    <v-carousel dark hide-delimiters>
        <v-carousel-item height="100%" :src="require('../assets/testimony_background.jpg')" v-for="(testimony, index) in testimonies" :key="index">
            <v-layout align-center justify-center column fill-height>
                <v-avatar :tile="false" :size="90">
                    <v-img :src="testimony.image"/>
                </v-avatar>
                <blockquote class="blockquote near-white-dav" id="id_testimony_name">{{testimony.nom}}</blockquote>
                <blockquote class="blockquote near-white-dav">{{testimony.description}}</blockquote>
            </v-layout>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import TestimonyService from '../services/testimony.service';
    export default {
        name: "Testimony",
        created() {
            /*TestimonyService.getAllTestimony().then((response) => {
                this.domains = response;
            })*/
            this.testimonies = TestimonyService.getAllTestimony();
        },
        data: () => ({
            testimonies: []
        })
    }
</script>

<style scoped>
    #id_testimony_name {
        font-size: 2em;
    }
</style>