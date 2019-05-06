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
            <v-card-title class="bg-theme-accentuate-dav">
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
                    <font-awesome-icon :icon="{prefix: 'fab', iconName: link.icon}" size="2x"/>
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
                    icon : "facebook"
                },
                {
                    link : 'https://fr.linkedin.com/company/davidson-consulting',
                    icon : "linkedin"
                },
                {
                    link : 'https://fr.viadeo.com/fr/company/davidson-consulting',
                    icon : "viadeo"
                },
                {
                    link : 'https://twitter.com/DavidsonSINord?lang=fr',
                    icon : "twitter"
                },
                {
                    link : 'https://www.instagram.com/davidson_consulting/',
                    icon : "instagram"
                }
            ]
        })
    }
</script>
<style scoped>

</style>