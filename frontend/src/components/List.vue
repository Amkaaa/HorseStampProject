<template>
    <div id="todo-list-example" class="container">
        <div class="row">
        <div class="card avatar" style="width: 18rem; margin:20px" v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:firstname="todo.firstname" v-bind:date="todo.date" v-bind:stampname="todo.stamp_name" v-bind:stampImage="todo.stampImage">
          <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
          <div class="card-img-top"></div>
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
  props: ['stampImage'],
  data () {
    return {
      todos: [],
      id: '',
      lastname: '',
      firstname: '',
      stamp_name: '',
      location: '',
      date: '',
      img: require('../assets/tamga/1572285648115se2.jpg'),
      // stampImage: '',
      upload: 'http://localhost:8000/uploads/1571908394930__.png',
      publicPath: process.env.BASE_URL
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    // imges () {
    //   require('../assets/tamga/se1.png')
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
