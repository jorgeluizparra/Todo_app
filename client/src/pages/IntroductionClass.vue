<template>
  <q-page class="">
  
    <q-input v-model="Name" type="text" label="Name" />
    <q-input v-model="Age" type="number" label="Age" />
    
    <div v-show="Name.length >= 5 & Age > 0">
      <h5>{{ helloMessage }}</h5>
      <p>{{ descriptionParagraph }}</p>
      <p>{{ showUpperCase() }}</p>
      <p :class="{'notAdult' : Age < 18}">{{ isAdult }}</p>
    </div>

    <hr>

    <taskList 
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
    ></taskList>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    'taskList' : require('components/Introduction.vue').default
  },
  data() {
    return {
      Name: "",
      Age: "",
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          dueDate: "2019/05/12",
          dueTime: "10:30"
        },
        {
          id: 2,
          name: "Get bananas",
          dueDate: "2019/05/13",
          dueTime: "14:00"
        },
        {
          id: 3,
          name: "Get apples",
          dueDate: "2019/05/14",
          dueTime: "16:00"
        }
      ]
    }
  },
  computed: {
    helloMessage() {
      return "Hello " + this.Name
    },
    descriptionParagraph() {
      return this.Name + " is " + this.Age + " years old."
    },
    isAdult() {
      if (this.Age >= 18) {
        return "Adult"
      } else {
        return "Not Adult"
      }
    }
  },
  methods: {
    showUpperCase() {
      return this.descriptionParagraph.toUpperCase()
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },

}
</script>

<style lang="css">
  .notAdult {
    background: pink;
    color: red;
  }
</style>