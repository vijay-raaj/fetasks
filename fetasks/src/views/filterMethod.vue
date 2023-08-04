<template>
     <div>
    <!-- Display the completed todos here -->
   
    <ul v-if="completedTodos.length > 0">
      <li v-for="todo in completedTodos" :key="todo.id">
       {{ todo.id }} .{{ todo.title }} ==>> {{ todo.completed }}<br><br>
      </li>
    </ul>
    <p v-else>No completed todos found.</p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'filterMethod',
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
        .then((response) => {
           
          this.todos = response.data;
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
        });
    }, 
  },
  computed: {
    completedTodos() {
      // Use .filter() to get all completed todos
      return this.todos.filter(todo => todo.completed)
    },
  },
   
}
</script>
<style scoped>
ul{
    list-style-type:none;
    text-align: left;
}
</style>