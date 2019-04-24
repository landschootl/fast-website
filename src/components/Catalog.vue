<template>
    <v-layout column wrap class="my-1">
        <v-flex id="id_title" xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 class="headline">FORMATIONS & AUDIT</h2>
                <span class="subheading">
                    Un savoir-faire diversifié
                </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container>
                <v-layout align-top>
                    <v-flex id="column" xs12 md3 v-for="(domain, index) in domains" :key="index">
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">{{domain.icon}}</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div id="id_domain" class="headline">{{domain.title}}</div>
                            </v-card-title>
                            <hr>
                            <v-card-text>
                                <ul>
                                    <li v-for="(subdomain, index) in domain.subdomains" :key="index"> <div id="id_subdomain">{{subdomain.title}}</div>
                                        <ul>
                                            <li id="list_skills" v-for="(skill, index) in subdomain.skills" :key="index">
                                                <input v-if="showCheckbox" type="checkbox" name="{{skill.title}}" value="{{skill.title}}">
                                                {{skill.title}}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
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
    
    #id_domain {
        color: #15BFAB;
    }

    #list_skills {
        font-weight: normal;
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
    }

    hr {
        display: block;
        color: black;
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        border-style: solid;
        border-width: 1.5px;
    }

    ul {
        list-style: none;
    }

</style>