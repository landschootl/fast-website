<template>
    <v-footer
            dark
            height="auto"
            class="footer"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="teal">
                <strong class="subheading">Venez nous rejoindre sur les réseaux sociaux !</strong>

                <v-spacer></v-spacer>

                <v-btn
                        v-for="link in links"
                        :key="link"
                        class="mx-3"
                        :href="link.link"
                        dark
                        icon
                >
                    <v-icon size="24px">{{ link.icon }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                &copy;2019 — <strong><a href="https://www.davidson.fr/">Davidson</a></strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name : 'Footer',
        data: () => ({
            links: [
                {
                    link : 'https://www.facebook.com/Davidson.Consulting/',
                    icon : 'fab fa-facebook'
                },
                {
                    link : 'https://fr.linkedin.com/company/davidson-consulting',
                    icon : 'fab fa-linkedin'
                },
                {
                    link : 'https://fr.viadeo.com/fr/company/davidson-consulting',
                    icon : 'fab fa-viadeo'
                },
                {
                    link : 'https://twitter.com/DavidsonSINord?lang=fr',
                    icon : 'fab fa-twitter'
                }
            ]
        })
    }
</script>
<style scoped>

    .teal {
        background-image: linear-gradient(to right top, #69247f, #883389, #a54393, #c1569c, #dc69a6);
    }

</style>