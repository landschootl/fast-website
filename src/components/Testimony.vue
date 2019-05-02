<template>
    <v-carousel  class="cara" dark hide-delimiters>
        <v-carousel-item height="100%" v-for="(testimony, index) in testimonies" :key="index">

            <v-responsive dark height="100%" >


                            <v-layout id="id_testimony_name">{{testimony.nom}}</v-layout>
                            <v-layout id="id_testimony_description">{{testimony.description}}</v-layout>
                            <img :src="require('../assets/testimony_background.jpg')" style="background-size: cover !important; display: block; z-index: 1 !important; position: relative;"/>



            </v-responsive>


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

    .cara, .cara .v-window__container, .cara .v-carousel__item {
        height: 100%!important;
    }

#id_background {
    background-image: url("../assets/testimony_background.jpg");
    background-size: cover;
}

#id_testimony_name {
    text-align: center;
    margin: 0 auto !important;
    color: white;
    z-index: 2 !important;
}

#id_testimony_description {
    text-align: center;
    margin: 0 auto !important;
    font-size: 100% !important;
    color: white;
    z-index: 2 !important;
}

</style>