<template>
    <div id="todo-list-example" class="container">
        <div class="row">
        <div class="card" style="width: 18rem; margin:20px" v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:firstname="todo.firstname" v-bind:date="todo.date" v-bind:stampname="todo.stamp_name" v-bind:stampImage="todo.stampImage">
          <img src="../assets/tamga/se1.png" class="card-img-top" alt="tamga">
          <div class="card-body">
            <h5 class="card-title">{{todo.stamp_name}}</h5>
            <p class="card-text">{{todo.define}}</p>
            <router-link :to="/stamp/+todo.id+' /'+todo.stamp_name+' /'+todo.define+' /'+todo.date+'/'">
            <a class="btn btn-primary">Дэлгэрэнгүй</a>
            </router-link>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      todos: [],
      id: '',
      lastname: '',
      firstname: '',
      stamp_name: '',
      location: '',
      date: '',
      stampImage: '',
      upload: 'http://localhost:8000/uploads/1571908394930__.png'
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    // getImgUrl (put) {
    //   var images = require.context('../assets/tamga/', false, /\.png$/)
    //   return images('./' + put)
    // },
    getTasks () {
      axios.get('/api/tasks').then(
        result => {
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>
<style>
.photo{
  width: 64px;
  height: 64px;
}
.row{
  grid-template-columns: auto auto auto;
  width:90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
