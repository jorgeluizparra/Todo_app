<template>
    <q-item 
        @click="updateTask({ id: id, update: { completed: !task.completed } })"
        :class=" !task.completed ? 'bg-orange-1' : 'bg-green-1'"
        tag="label"
        clickable
        v-ripple
        v-touch-hold:300.mouse="showEditTaskModal"
    >

        <q-item-section side top>
            <q-checkbox 
                :value="task.completed" 
                no-pointer-events
            />
        </q-item-section>

        <q-item-section>
            <q-item-label 
                :class="{'text-striketrough' : task.completed}"
                v-html="$options.filters.searchHighlight(task.name, search)"
            >
            </q-item-label>
        </q-item-section>

        <q-item-section
          side
          v-show="task.dueDate">
            <q-icon
              name="event"
              size="18px" />
            <q-item-label caption>
                {{ task.dueDate | niceDate }}
            </q-item-label>
            <q-item-label caption>
                <small>{{ taskDueTime }}</small>
            </q-item-label>
        </q-item-section>

        <q-item-section side>
            <div class="row">
                <q-btn 
                    flat 
                    round
                    dense
                    color="primary" 
                    icon="edit"
                    @click.stop="showEditTaskModal"
                />
                <q-btn 
                    flat 
                    round
                    dense
                    color="red" 
                    icon="delete"
                    @click.stop="promptToDelete(id)"
                />
            </div>
        </q-item-section>
        

        <q-dialog v-model="showEditTask">
            <edit-task
              @close="showEditTask = false" 
              :task="task"
              :id="id"
            />
        </q-dialog>
    </q-item>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'
const { formatDate } = date

export default {
    components: {
        'edit-task': require('components/Modals/EditTask.vue').default
    },
    props: ['task', 'id'],
    data() {
        return {
            showEditTask: false
        }
    },
    computed: {
        ...mapState('tasks', ['search']),
        ...mapGetters('settings', ['settings']),
        taskDueTime() {
            if(this.settings.show12HourTimeFormat){
                return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
            }
            return this.task.dueTime
        }
    },
    filters: {
        niceDate (value) {
            return date.formatDate(value, 'MMM D')
        },
        searchHighlight(value, search) {
            let searchRegExp = new RegExp(search, 'ig')
            if(search) {
                return value.replace(searchRegExp, (match) => {
                    return '<span class="bg-yellow-6">' + match + '</span>'
                })
            }
            return value
        }
    },
    methods: {
        ...mapActions('tasks', ['updateTask', 'deleteTask']),
        showEditTaskModal () {
            this.showEditTask = true
        },
        promptToDelete (id) {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Really delete?',
                ok: {
                    push: true
                },
                cancel: {
                    color: 'negative'
                },
                persistent: true
            }).onOk(() => {
                this.deleteTask(id)
            })
        }
    }
}
</script>

<style lang="css">
    
</style>