<template>
  <q-page class="q-pa-md">

    <div class="row q-mb-lg">
      <search/>
      <sort/>
    </div>

    <p v-if="search && !Object.keys(tasksToDo).length && !Object.keys(tasksCompleted).length">
      No search results!</p>

    <div class="relative-position">
      <no-tasks-todo
        v-show="!Object.keys(tasksToDo).length && !search && !settings.showTasksInOneList"
      />
      
      <tasks-to-do
        v-show="Object.keys(tasksToDo).length"
        :tasksToDo="tasksToDo"/>
      
      <tasks-completed
        v-show="Object.keys(tasksCompleted).length"
        :tasksCompleted="tasksCompleted"/>
    </div>
    
    <div class="text-center q-mb-lg q-mt-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="teal-5"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PageTodo',
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksToDo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search'])
  },
  components: {
    'add-task' : require ('components/Modals/AddTask.vue').default,
    'tasks-to-do' : require ('components/Tasks/TasksToDo.vue').default,
    'tasks-completed' : require ('components/Tasks/TasksCompleted.vue').default,
    'no-tasks-todo' : require ('components/Tasks/NoTasks.vue').default,
    'search' : require ('components/Tasks/Tools/Search.vue').default,
    'sort' : require ('components/Tasks/Tools/Sort.vue').default
  },
  mounted() {
    this.$root.$on('showAddTask', ()=>{
      this.showAddTask = true
    })
  },

}
</script>

<style lang="css">
  .text-striketrough {
    text-decoration: line-through;
  }
</style>