<template>
    <div class="row q-mb-sm">
        <q-input 
            class="col"
            outlined 
            :value="name"
            @input="$emit('update:name', $event)"
            label="Task name"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            autofocus
            v-select-all
        >
            <template v-slot:append>
                <q-icon
                    v-show="name"
                    name="close"
                    @click="$emit('update:name', '')" 
                    class="cursor-pointer"/>
            </template>
        </q-input>
    </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
    props: ['name'],
    directives: {
        selectAll
    }
}
</script>

<style lang="css">
    
</style>