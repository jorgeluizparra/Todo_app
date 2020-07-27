<template>
    <ul>
      <li>
        <div>{{ task.name }} {{ index }}</div>
        <small>{{ task. dueDate}} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)" >Delete</button>
      </li>
    </ul>
</template>

<script>
export default {
    props: ['task', 'index']
}
</script>

<style lang="css">
    
</style>