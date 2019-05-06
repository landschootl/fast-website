<template>
    <v-carousel  class="cara" dark hide-delimiters>
        <v-carousel-item height="100%" v-for="(testimony, index) in testimonies" :key="index">
            <v-responsive dark height="100%" >
              <v-img id="id_background" :src="require('@/assets/testimony_background.jpg')"/>
                <v-layout align-center column justify-center class="header-text">
                    <v-avatar :tile="false" :size="100">
                        <v-img :src="testimony.image"/>
                    </v-avatar>
                    <v-flex  xs12 class="text-xs-center">
                        <blockquote class="blockquote near-white-dav" id="id_testimony_name">{{testimony.nom}}</blockquote>
                        <blockquote class="blockquote near-white-dav" id="id_testimony_description">{{testimony.description}}</blockquote>
                    </v-flex>
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

    .header-text {
        position: absolute;
        top: 20%;
        left: auto;
        right: auto;
        width: 96.66666666666666%;
    }

#id_testimony_name {
    font-size: 200%;
}

</style>