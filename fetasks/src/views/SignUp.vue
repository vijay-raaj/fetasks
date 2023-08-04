<template>
    <div class="login">
        <h1>LOGIN</h1>
        <form @submit.prevent="createPost">
            <div class="user">
                <label for="name">Name</label>
            
        <input type="text" id="name" v-model="mydata.name" required />
      <br>
    <br>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="mydata.email" required />
            </div>
            <br>
            
            <button type="submit">login</button>
        </form> 
        
            </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name:'SignUp',
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
  <style>

  h1{
    padding: 3%;
    color:white;

  }
  .login {
    background-image: url("@/assets/login.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    
    
  }
  
  .user {
    color:black;
    font:black ;
    margin-bottom: 4px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color:white;
    
  }
  
  input {
    width: 25%;
    padding: 8px 8px;
    font-size: 16px;
    color:black;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  @media only screen and (max-width:600px) {
    input {
        width:70%
    }
    
  }
  </style>