<template>
    <v-layout column wrap class="my-1 layout_global">
        <v-flex xs12>
            <v-container id="id_container" grid-list-xl>
                <v-layout v-if="!showCheckbox" align-center justify-center column fill-height>
                    <v-flex xs12 sm4>
                        <div class="text-xs-center">
                            <h2 class="headline ATCArquette-Medium turquoise-dav">FORMATIONS & AUDITS</h2>
                            <span class="subheading ATCArquette-Light">
                                Un savoir-faire diversifié
                             </span>
                        </div>
                    </v-flex>
                </v-layout>
                    <v-layout  row wrap justify-center align-top>
                        <v-flex id="column" xs12 md3 v-for="(domain, index) in domains" :key="index">
                            <v-card class="elevation-0 transparent">
                                <v-card-text v-if="!showCheckbox" class="text-xs-center">
                                    <v-icon class="turquoise-dav" x-large>{{domain.icon}}</v-icon>
                                </v-card-text>
                                <v-card-title v-if="!showCheckbox" primary-title class="layout justify-center">
                                    <div class="headline turquoise-dav ATCArquette-Medium">{{domain.title}}</div>
                                </v-card-title>
                                <hr v-if="!showCheckbox" width="30%" height="3px" class="near-black-dav"/>
                                <v-card-text>
                                    <form>
                                        <ul>
                                            <li v-for="(subdomain, index) in domain.subdomains" :key="index"> <div class="ATCArquette-Bold" id="id_subdomain">{{subdomain.title}}</div>
                                                <ul>
                                                    <li class="ATCArquette-Medium near-black-dav bef-turquoise-dav" id="list_skills" v-for="(skill, index) in subdomain.skills" :key="index">
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
            </v-container>
        </v-flex>
        <v-layout align-end justify-center column fill-height>
             <v-btn v-if="showCheckbox" color="primary" @click="validate">Continue</v-btn>
        </v-layout>
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

<style scoped lang="scss">

    #column:nth-child(odd) {
        background-color: rgba(238, 240, 239, 0.5);
    }

    .layout_global {
        background-image: url("../assets/catalog_background.jpg") !important;
        background-size: cover;
        overflow: hidden;
    }

    #id_container {
        padding: 0px !important;
        max-width: none !important;
    }

    #list_skills::before {
        content: "•";
        display: inline-block;
        width: 1em;
    }

    #list_skills {
        list-style-position: outside;
    }

    #id_subdomain {
        padding-top: 20px;
    }

    hr {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-width: 1.75px;
    }

    ul {
        list-style: none;
        padding-inline-start: 0px;
    }

    #checkbox {
        margin: 0;
        padding: 0;
    }
    
    .btn_continue {
        right: 0px;
        position: absolute;
    }

</style>