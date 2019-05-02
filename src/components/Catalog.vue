<template>
    <v-layout id="id_layout" column wrap class="my-1">
        <v-flex id="id_title" xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 id="id_title_catalog" class="headline">FORMATIONS & AUDITS</h2>
                <span id="id_subheading" class="subheading">
                    Un savoir-faire diversifié
                </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container id="id_container" grid-list-xl>
                <v-layout  row wrap justify-center align-top>
                    <v-flex id="column" xs12 md3 v-for="(domain, index) in domains" :key="index">
                        <v-card id="id_card" class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon id="id_icon_domain" x-large>{{domain.icon}}</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div id="id_domain" class="headline">{{domain.title}}</div>
                            </v-card-title>
                            <hr/>
                            <v-card-text>
                                <form>
                                <ul>
                                    <li v-for="(subdomain, index) in domain.subdomains" :key="index"> <div id="id_subdomain">{{subdomain.title}}</div>
                                        <ul>
                                            <li id="list_skills" v-for="(skill, index) in subdomain.skills" :key="index">

                                                {{skill.title}}

                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import DomainService from '../services/domain.service';

    export default {
        name: "Catalog",
        props: {
            showCheckbox: Boolean
        },
        created() {
            // CatalogService.getAll().then((response) => {
            //     throw new Error(response.data);
            // }).catch((error) => {
            //     throw new Error(error.response.data);
            // });

            this.domains = DomainService.getAll();


        },
        
        data: () => ({
            domains: []
        })
    }
</script>

<style scoped>

    #id_title_catalog {
        font-family: ATCArquette_Medium, Helvetica, Arial, sans-serif !important;
    }

    #id_subheading {
        font-family: ATCArquette_Light, Helvetica, Arial, sans-serif !important;
    }

    #column {
        margin-top: -6.3%;
        padding-top: 7%;
        padding-bottom: 5%;
    }

    #column:nth-child(odd) {
        background-color: rgba(238, 240, 239, 0.5);
    }

    #id_card {
        z-index: 2 !important;
    }

    #id_domain {
        color: #15BFAB;
        font-family: ATCArquette_Medium, Helvetica, Arial, sans-serif !important;
    }

    #id_icon_domain {
        color: #15BFAB !important;
    }

    #id_layout {
        background-image: url("../assets/catalog_background.jpg");
        background-size: cover;
    }

    #id_title {
        z-index: 3;
    }

    #id_container {
        padding: 0px !important;
        max-width: none !important;
    }

    #list_skills {
        font-weight: normal;
        font-family: ATCArquette_Medium, Helvetica, Arial, sans-serif !important;
    }

    #list_skills::before {
        content: "•";
        color: #15BFAB;
        display: inline-block;
        width: 1em;
        margin-left: -2em;
    }

    #id_subdomain {
        font-weight: bold;
        padding-top: 20px;
        font-family: ATCArquette_Bold, Helvetica, Arial, sans-serif !important;
    }

    hr {
        display: block;
        color: black;
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        border-style: solid;
        border-width: 1.75px;
    }

    ul {
        list-style: none;
    }

</style>