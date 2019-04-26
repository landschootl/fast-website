<template>
    <v-form ref="form" v-model="valid" lazy-validation >
        <v-container>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.name"
                                 :rules="nameRules" label= "Nom" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.tel"
                                  :rules="phoneRules" label="Téléphone" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="registration.mail"
                                  :rules="emailRules" label="E-mail" required>
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
        <v-btn :disabled="!valid" color="primary" @click="validate">Continue</v-btn>
    </v-form>
</template>

<script>
    import FormService from '../services/form.service';

    export default {
        name: "Formulary",

        created() {
            this.registration = FormService.getRegistration();
        },

        data: () => ({
            valid: false,
            nameRules: [
                v => !!v || 'Le nom est requis'
            ],
            emailRules: [
                v => !!v || 'Le mail est requis',
                v => /.+@.+/.test(v) || 'Le format de données est invalide'
            ],
            phoneRules: [
                v => !!v || 'Le numéro de téléphone est requis',
                v => /^0[1-6]\d{8}$/.test(v) || 'Le format de données est invalide'
            ],
            registration : null,
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    console.log('ok')
                    this.$emit('next')
                    fetch(`http://localhost:8080/api/quotes/${this.registration.id}`, {
                        method: 'PUT',
                        body: JSON.stringify(this.registration),
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        }
                    }).then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            this.registration.id = data.id;
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>