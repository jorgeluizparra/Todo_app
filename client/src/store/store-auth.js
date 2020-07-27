import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { errorMessageHendler } from 'src/functions/error-message-handler'

const state = {
    loggedIn: false
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    }
}

const actions = {
    registerUser({}, payload){
        Loading.show()
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('response', response)
        })
        .catch(error => {
            errorMessageHendler(error.message)
        })
    },
    loginUser({}, payload){
        Loading.show()
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('response', response)
        })
        .catch(error => {
            errorMessageHendler(error.message)
        })
    },
    logoutUser() {
        firebaseAuth.signOut()
    },
    handleAuthStateChange({commit, dispatch}) {
        firebaseAuth.onAuthStateChanged(user => {
            Loading.hide()
            if (user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                this.$router.push('/').catch(err => {})
                dispatch('tasks/fbReadingData', null, { root: true })
            } else {
                commit('setLoggedIn', false)
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/auth').catch(err => {})
            }
        });
    }

}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}