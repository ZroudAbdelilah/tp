<template>
  <div
    v-if="completed.length > 0"
    class="panel d-flex flex-column gap-3 overflow-auto mx-3"
  >
    <b-card :header="'Completed ( ' + completed.length + ' )'">
      <b-list-group>
        <b-list-group-item
          v-for="todo in completed"
          class="d-flex justify-content-between"
        >
          {{ todo.body }}
          <b-button
            variant="danger"
            v-b-tooltip.hover
            title="Remove"
            @click="remove(todo)"
          >
            <b-icon icon="trash"></b-icon>
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    remove(todo) {
      this.$store.dispatch("removeTodo", todo);
    },
  },
  computed: {
    completed() {
      return this.$store.getters.completedTodos;
    },
  },
};
</script>

<style scoped>
:deep(.card-header) {
  font-size: 20px;
  font-weight: 700;
}
</style>
