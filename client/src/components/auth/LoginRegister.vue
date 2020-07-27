<template>
    <div>
        <div class="row q-mb-sm">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
                </template>
                {{ tab | titleCase }} to access your Todos anywhere!
            </q-banner>
        </div>
        <form @submit.prevent="submitForm">
            <div class="row q-mb-sm">
                <q-input
                    :rules="[ val => isValEmailAdress(val) || 'Please enter a valid email adress!']"
                    lazy-rules
                    ref="email"
                    class="col"
                    outlined
                    v-model="formData.email"
                    label="Email"/>
            </div>
            <div class="row q-mb-sm">
                <q-input
                    :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters!']"
                    lazy-rules
                    ref="password"
                    class="col"
                    outlined
                    type="password"
                    v-model="formData.password"
                    label="Password"/>
            </div>
            <div class="row">
                <q-btn
                    type="submit"
                    color="primary"
                    :label="tab" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: [
        'tab'
    ],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth', ['registerUser', 'loginUser']),
        isValEmailAdress(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()
            if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                if(this.tab == 'login') {
                    this.loginUser(this.formData)
                }
                else {
                    this.registerUser(this.formData)
                }
            }
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>

</style>