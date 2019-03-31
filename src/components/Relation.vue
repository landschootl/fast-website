<template>
    <v-parallax :src="require('@/assets/cover2.jpg')" height="380">
        <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center" style="font-size: 30px;">Vous avez un besoin ?</div>
            <em style="font-size: 19px;">Venez discuter avec nous !</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
                Demander une mise en relation
            </v-btn>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name: "Relation"
    }
</script>

<style scoped>

</style>