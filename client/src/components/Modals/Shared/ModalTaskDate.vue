<template>
    <div class="row q-mb-sm">
        <q-input 
            outlined 
            :value="dueDate"
            @input="$emit('update:dueDate', $event)"
            label="Due date"
        >
            <template v-slot:append>
                <q-icon
                    v-show="dueDate"
                    name="close"
                    @click="$emit('clear')" 
                    class="cursor-pointer"/>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                    <q-date 
                        :value="dueDate"
                        @input="$emit('update:dueDate', $event)"
                    />
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['dueDate']
}
</script>

<style lang="css">
    
</style>