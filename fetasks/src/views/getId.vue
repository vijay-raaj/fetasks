<template>
    <div>
        <form @submit.prevent="getDataId">
            Enter the ID : <input type="text" v-model="mydata.id" placeholder="Enter the ID"><br><br><br>
            <button type="submit">Get Data</button>
        </form>
        <div v-for="data in result" :key="data.id">
      <h2>{{ data.id }}.{{ data.title }}</h2>
      <p>{{ data.body }}</p>
      
  </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'getId',
    data(){
        return{
            result:[],
            mydata:{
                id:''
            }
          
        }
    },
   
    methods:{
        getDataId(){
            this.result=[]
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.mydata.id)
            .then((res)=>{
                console.log(res.data)
                this.result.push(res.data)
                this.mydata.id=null
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>