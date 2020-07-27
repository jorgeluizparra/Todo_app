import { Dialog, Loading } from 'quasar'

export function errorMessageHendler (errorMessage) {
    Loading.hide()
    Dialog.create({
        title: 'Error',
        message: errorMessage,
    })
}