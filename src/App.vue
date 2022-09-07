<template>
  <div id="app" class="container">
  
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
    <CompletedTodos></CompletedTodos>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import CompletedTodos from './components/CompletedTodos.vue'
export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
 
}
</script>

<style>
body {
  background-color: rgb(245, 245, 245) !important;
  font-family: Helvetica, sans-serif;
}
</style>