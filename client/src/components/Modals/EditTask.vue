<template>
    <q-card>
        
        <modal-header>Edit Task</modal-header>

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
    props: [
        'task',
        'id'
    ],
    data () {
        return {
            taskToSubmit: {}
        }
    },
    methods: {
        ...mapActions('tasks', ['updateTask']),
        submitTask () {
            this.updateTask({
                id: this.id,
                update: this.taskToSubmit
            })
            this.$emit('close')
        },
    },
    mounted() {
        this.taskToSubmit = Object.assign({}, this.task)
    },
    
}
</script>

<style lang="css">
    
</style>