<template>
    <div class="panel d-flex flex-column gap-3 overflow-auto mx-3">

        <h1 class="title position-relative mx-4 fs-20 fw-700 m-0">
            Tasks
        </h1>
        
        <div>
            <b-form-group id="input-group-1">
                <b-form-input
                    id="input-1"
                    :value="newTodo"
                    @change.native="getTodo"
                    placeholder="New task"
                    required
                ></b-form-input>
            </b-form-group>
            <div class="d-flex gap-2">
                <b-button variant="success" class="bgcolor-main border-none" @click="addTodo">
                    <b-icon icon="plus"></b-icon> {{editing ? 'Update' : 'Add'}}
                </b-button>
                <b-button variant="danger">
                    <b-icon icon="trash"></b-icon> Clear
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            },
            editing(){
                return this.$store.getters.editing
            }
        }
}
</script>
<style scoped>
    :deep(input) {
        background-color: #eff3f6 !important;
        border: solid 1px rgba(255,255,255,.5);
        height: 48px !important;
        font-weight: 400;
        font-size: 14px;
    }

</style>