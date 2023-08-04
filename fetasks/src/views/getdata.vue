<template>
    
  <div>
      <button @click="getData">Get Data</button>
  <div v-for="data in result" :key="data.Id">
      <h2>{{ data.id }}.{{ data.title }}</h2>
      <p>{{ data.body }}</p>
      
  </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'GetData',
  data(){
      return{
          result:[]
      }
  },
  methods:{
      getData(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((res)=>{
              console.log(res.data)
              this.result=res.data
          })
          .catch((err)=>{
              console.log(err)
          })
      }
  }
}
</script>