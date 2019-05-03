<template>
    <v-carousel  class="cara" dark hide-delimiters>
        <v-carousel-item height="100%" v-for="(testimony, index) in testimonies" :key="index">

            <v-responsive dark height="100%" >

                <v-img id="id_background" :src="require('@/assets/testimony_background.jpg')"/>
                <v-layout
                        align-center
                        column
                        justify-center
                >
                <blockquote class="blockquote text-xs-center near-white-dav" id="id_testimony_name">{{testimony.nom}}</blockquote>
                <blockquote class="blockquote text-xs-center near-white-dav" id="id_testimony_description">{{testimony.description}}</blockquote>
                </v-layout>


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
        position: relative;
    }

#id_background {
    background-image: url("../assets/testimony_background.jpg") !important;
    background-size: cover;
}

#id_testimony_name {
    position: absolute;
    text-align: center;
    margin: 0 auto !important;
    color: white;
}

#id_testimony_description {
    position: absolute;
    text-align: center;
    margin: 0 auto !important;
    font-size: 100% !important;
    color: white;
}

</style>