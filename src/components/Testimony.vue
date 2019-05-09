<template>
    <v-carousel dark hide-delimiters>
        <v-carousel-item height="100%" v-for="(testimony, index) in testimonies" :key="index">
            <v-responsive dark height="100%" >
                <v-img id="id_background" :src="require('@/assets/testimony_background.jpg')"/>
                <v-layout align-center column justify-center>
                    <v-avatar :tile="false" :size="100" class="header-image">
                        <v-img :src="testimony.image"/>
                    </v-avatar>
                    <v-flex  xs12 class="text-xs-center header-text">
                        <blockquote class="blockquote near-white-dav" id="id_testimony_name">{{testimony.nom}}</blockquote>
                        <blockquote class="blockquote near-white-dav">{{testimony.description}}</blockquote>
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
        top: 40%;
        left: auto;
        right: auto;
        width: 97%;
    }

    .header-image {
        position: absolute;
        top: 15%;
        left: auto;
        right: auto;
        width: 97%;
    }

    #id_testimony_name {
        font-size: 200%;
    }
</style>