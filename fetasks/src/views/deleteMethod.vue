<template>
    <div>
        <form @submit.prevent="deleteData">
            Enter the ID : <input type="text" v-model="mydata.id" placeholder="Enter the ID"><br><br><br>
            <button type="submit">Delete Data</button>
        </form></div>
</template>
<script>
import axios from 'axios'
export default {
    name:'deleteMethod',
    data(){
        return{
            mydata:{
                id:''
            }
    }
},
methods:{
    deleteData(){
        axios.delete('https://jsonplaceholder.typicode.com/users/'+this.mydata.id)
        .then((response)=>{
            console.log('post deleted successfully',response)
        })
        .catch((error)=>{
            console.log('error occured',error)
        })
    }
}
}
</script>