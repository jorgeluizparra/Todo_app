<template>
    <q-card>
        
        <modal-header>Add Task</modal-header>

        <q-form
            @submit.prevent="submitForm"
        >
            <q-card-section class="q-pt-none">
                
                <modal-task-name
                  :name.sync="taskToSubmit.name" 
                  ref="modalTaskName"/>
                
                <modal-task-date
                  :dueDate.sync="taskToSubmit.dueDate"
                  @clear="clearDueDate" />

                <modal-task-time
                  :dueTime.sync="taskToSubmit.dueTime"
                  :dueDate="taskToSubmit.dueDate" />

            </q-card-section>

            <q-card-actions align="right">
                <modal-save-button />
            </q-card-actions>

        </q-form>
        
    </q-card>

</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditModal from 'src/mixins/mixin-add-edit-modal'

export default {
    mixins: [mixinAddEditModal],
    data () {
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                completed: false,
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitTask () {
            this.addTask(this.taskToSubmit)
            this.$emit('close')
        },
    },
    
}
</script>

<style lang="css">
    
</style>