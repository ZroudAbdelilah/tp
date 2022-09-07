<template>
    <div v-if="todos.length > 0" class="panel d-flex flex-column gap-3 overflow-auto mx-3">
        <b-card :header="'Current ( ' + todos.length + ' )'">
            <b-list-group>
                <b-list-group-item v-for="todo in todos" class="d-flex justify-content-between">
                    {{todo.body}}
                    <div class="d-flex gap-2">
                        <b-button variant="dark" v-b-tooltip.hover title="Edit" @click="edit(todo)">
                            <b-icon icon="pen"></b-icon>
                        </b-button>
                        <b-button variant="success" v-b-tooltip.hover title="Complete" @click="complete(todo)">
                            <b-icon icon="check2"></b-icon>
                        </b-button>
                        <b-button variant="danger" v-b-tooltip.hover title="Remove" @click="remove(todo)">
                            <b-icon icon="trash"></b-icon>
                        </b-button>
                    </div>
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>
<script>
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>
<style scoped>
    :deep(.card-header) {
        font-size: 20px;
        font-weight: 700;
    }

    .btn-group{
        float: right;
    }
</style>