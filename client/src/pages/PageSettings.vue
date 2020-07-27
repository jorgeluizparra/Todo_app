<template>
  <div class="q-pa-md">
    <q-list
      bordered
      padding
      class="q-mb-md">
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="show12HourTimeFormat" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="showTasksInOneList" val="battery" />
        </q-item-section>
      </q-item>

    </q-list>

    <q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebSite"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="emailUs"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  name: 'PageSettings',
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat
      },
      set(value) {
        this.setShow12HourTimeFormat(value)
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList
      },
      set(value) {
        this.setshowTasksInOneList(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setShow12HourTimeFormat', 'setshowTasksInOneList']),
    visitOurWebSite() {
      openURL('http://www.google.com')
    },
    emailUs() {
      window.location.href = 'mailto: hello@awesometodo.com?subject=Awesome Todo Feedback'
    }
  },
}
</script>

<style lang="css">
  
</style>