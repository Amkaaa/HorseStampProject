<template>
  <div>
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="card avatar" style="width: 18rem; margin:20px" v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:date="todo.date" v-bind:stampname="todo.stampname" v-bind:stampImage="todo.stampImage">
          <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
          <div class="card-img-top"></div>
          <div class="card-body">
            <h5 class="card-title">{{todo.stampname}}</h5>
            <p class="card-text">{{todo.define}}</p>
            <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
            <a class="btn btn-primary">Дэлгэрэнгүй</a>
            </router-link>
          </div>
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
      stampname: '',
      location: '',
      date: '',
      // stampImage: '',
      publicPath: process.env.BASE_URL,
      counter: true
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      axios.get('/api/stamps').then(
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
