<!-- post method-->
<template>
    <div>
        <form @submit.prevent="createPost">
            Enter the Name:<input type="text" v-model="mydata.name"><br> <br><br>
            Enter the Email:<input type="text" v-model="mydata.email"><br><br><br>
            <button type="submit"> Post</button>
        </form> 
            </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'postMethod',
    data(){
        return{
           mydata:{
            name:'',
            email:''
           }
        }
    },
    methods:{
        createPost(){
            axios.post('https://jsonplaceholder.typicode.com/users',this.mydata)
            .then((response)=>{
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>