<template>
    <v-layout column wrap class="my-1">
        <v-flex v-if="!showCheckbox" xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 class="headline ATCArquette-Medium turquoise-dav">BLOG</h2>
                <span class="subheading ATCArquette-Light">
                        Consultez nos articles de blog
                    </span>
            </div>
        </v-flex>
        <v-layout row wrap align-center justify-center>
            <CardBlog class="card"></CardBlog>
            <CardBlog class="card"></CardBlog>
            <CardBlog class="card"></CardBlog>
        </v-layout>
    </v-layout>
</template>

<script>

    import CardBlog from './CardBlog';

    export default {
        name: "PreviewBlog",
        components: {
            CardBlog
        }
    }
</script>

<style scoped>

    .card {
        margin: 10px 50px 50px 50px;
        max-width: 300px;
    }

</style>