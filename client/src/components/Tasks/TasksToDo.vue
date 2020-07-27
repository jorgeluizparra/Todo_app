<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header
        v-show="!settings.showTasksInOneList"
        bgColor="bg-orange-4">
        To do
      </list-header>
      <q-list
        bordered
        separator  
      >
        <task
          v-for="(task, key) in tasksToDo"
          :key="key"
          :task="task"
          :id="key"
        >
        </task>
      </q-list>
    </div>
  
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['tasksToDo'],
    components: {
      'task' : require ('components/Tasks/Task.vue').default,
      'list-header' : require ('components/Shared/ListHeader.vue').default
    },
    computed: {
      ...mapGetters('settings', ['settings'])
    },
}
</script>

<style lang="css">
    
</style>