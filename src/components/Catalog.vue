<template>

    <v-layout column wrap class="my-1">
        <v-flex v-if="!showCheckbox" id="id_title" xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 class="headline">FORMATIONS & AUDITS</h2>
                <span class="subheading">
                    Un savoir-faire diversifié
                </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container id="id_container" grid-list-xl>
                <v-layout  row wrap justify-center align-top>
                    <v-flex id="column" xs12 md3 v-for="(domain, index) in domains" :key="index">
                        <v-card class="elevation-0 transparent">
                            <v-card-text v-if="!showCheckbox" class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">{{domain.icon}}</v-icon>
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
                                                <input type="checkbox" id="checkbox" v-if="showCheckbox" v-model="registration.skills" v-bind:value="skill">
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
                <v-btn class="btn_continue" v-if="showCheckbox" color="primary" @click="validate">Continue</v-btn>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import DomainService from '../services/domain.service';
    import FormService from '../services/form.service';
    import ApiService from '../services/api.service';

    export default {
        name: "Catalog",
        props: {
            showCheckbox: Boolean
        },
        created() {
            /*DomainService.getAll().then((response) => {

                this.domains = response;
            })*/
            this.domains = DomainService.getAll();
            this.registration = FormService.registration;
        },
        
        data: () => ({
            domains: [],
            registration : {}
        }),
        methods: {
            validate() {
                if(this.registration.skills.length > 0) {
                    this.$emit('next');
                    if(this.registration.id < 0) {
                        //ApiService.createQuote();
                    }else{
                        //ApiService.updateQuote();
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #column {
        margin-top: -6.3%;
        padding-top: 7%;
        padding-bottom: 0%;
    }

    #column:nth-child(odd) {
        background-color: rgba(238, 240, 239, 0.5);
    }

    #id_card {
        z-index: 2 !important;
    }

    #id_domain {
        color: #15BFAB;
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
        border-width: 1.75px;
    }

    ul {
        list-style: none;
    }

    #checkbox {
        margin: 0;
        padding: 0;
    }
    
    .btn_continue {
        right: 0px;
        position: absolute;
    }

    .btn_continue {
        right: 0px;
        position: absolute;
    }

</style>