<template>
  <q-layout view="hHh LpR fFf">
    <q-header>
      <q-toolbar class="bg-blue-grey-10">

        <q-toolbar-title class="absolute-center"> 
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          class="absolute-right"
          icon-right="account_circle"
          label="Login" />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          class="absolute-right"
          icon-right="account_circle"
          label="Logout" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-6">
      <q-tabs>
        <q-route-tab 
          v-for="link in essentialLinks" 
          :icon="link.icon" 
          :label="link.title" 
          :key="link.id" 
          :to="link.link"
        />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink: require('components/EssentialLink').default
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          id: 1,
          title: 'To Do',
          link: '/',
          icon: 'list',
        },
        {
          id: 2,
          title: 'Settings',
          link: '/settings',
          icon: 'settings',
        }
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  },
}
</script>

<style lang="css">
  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }
</style>
