export default {
    components: {
        'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
        'modal-task-name': require('components/Modals/Shared/ModalTaskName.vue').default,
        'modal-task-date': require('components/Modals/Shared/ModalTaskDate.vue').default,
        'modal-task-time': require('components/Modals/Shared/ModalTaskTime.vue').default,
        'modal-save-button': require('components/Modals/Shared/ModalSaveButton.vue').default
    },
    methods: {
        submitForm () {
            this.$refs.modalTaskName.$refs.name.validate()
            if (!this.$refs.modalTaskName.$refs.name.hasError) {
                this.submitTask()
            }
        },
        clearDueDate () {
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    },
}