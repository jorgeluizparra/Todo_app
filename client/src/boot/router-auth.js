import { LocalStorage } from 'quasar'

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    let loggerIn = LocalStorage.getItem('loggedIn')
    if (!loggerIn && to.path !== '/auth') {
      next('/auth')
    }
    else {
      next()
    }
  })
}
