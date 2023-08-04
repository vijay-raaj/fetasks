<template>
     <div>
    <!-- Display the todos with "done" field here -->
    <ul>
      <li v-for="todo in todosWithDone" :key="todo.id">
       {{ todo.id }} . {{ todo.title }} - {{ todo.done }}<br><br>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'mapMethods',
  data(){
    return{
    todos: [],
   }
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      // Fetch todos data from JSONPlaceholder API
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
        });
    },
  },
  computed: {
    todosWithDone() {
      return this.todos.map(todo => ({
        ...todo,
        done : todo.completed,
      }));
    },
  },
}

</script>
<style scoped>
ul{
    list-style-type: none;
}
</style>