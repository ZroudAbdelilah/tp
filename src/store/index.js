import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    editing: false,
    todoToUpdateIndex: null,
    newTodo: ''
  },
  getters: {
    newTodo: state => state.newTodo,
    editing: state => state.editing,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed})
  },
  mutations: {
    GET_TODO(state, todo){
      state.newTodo = todo
    },
    ADD_TODO(state){
      if (!state.editing) {
        state.todos.push({
          body: state.newTodo,
          completed: false
        })
      }else {
        console.log(state.todos[state.todoToUpdateIndex]);
        state.todos[state.todoToUpdateIndex].body = state.newTodo
        state.editing = false
      }
    },
    EDIT_TODO(state, todo){
      var todos = state.todos
      state.todoToUpdateIndex = todos.indexOf(todo)
      state.editing = true
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state){
      state.newTodo = ''
    }
  },
  actions: {
    getTodo({commit}, todo){
      commit('GET_TODO', todo)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo){
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
     commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  modules: {
  }
})
