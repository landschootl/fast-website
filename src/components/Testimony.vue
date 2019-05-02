<template>
    <v-carousel light hide-delimiters>
        <v-carousel-item>
            <img :src="require('../assets/testimony_background.jpg')" />
        </v-carousel-item>
        <v-carousel-item>
            <img :src="require('../assets/testimony_background.jpg')" />
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

</style>