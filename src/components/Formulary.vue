<template>
    <v-form ref="form" v-model="valid" lazy-validation >
        <v-container>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.name"
                                 :rules="rules.nameRules" label= "Nom" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.tel"
                                  :rules="rules.phoneRules" label="Téléphone" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.mail"
                                  :rules="rules.emailRules" label="E-mail" required>
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md8>
                <v-textarea v-model="registration.description"
                              label="Description">
                </v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
        <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Cochez pour continuer!']"
                label="Cochez pour continuer"
                required>
        </v-checkbox>
        <v-btn class="btn_continue" :disabled="!valid" color="primary" @click="validate">Continue</v-btn>
    </v-form>
</template>

<script>
    import FormService from '../services/form.service';
    import ApiService from '../services/api.service';

    export default {
        name: "Formulary",

        created() {
            this.rules = FormService.rules;
            this.registration = FormService.registration;
        },

        data: () => ({
            valid: false,
            rules : {},
            registration : {},
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.$emit('next')
                    ApiService.updateQuote();
                }
            }
        }
    }
</script>

<style scoped>

    .btn_continue {
        right: 0px;
        position: absolute;
    }

</style>