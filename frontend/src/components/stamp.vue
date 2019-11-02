<!--Энд нэг тамганы дэлгэрэнгүй мэдээллийг харуулах болно-->
<template>
    <div>
        <div v-for="(todo) in stamps" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:date="todo.date" v-bind:stampname="todo.stampname" v-bind:stampImage="todo.stampImage">
        <div class="card mb-3" style="max-width: 100%;" v-if="$route.params.id==todo.id">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Тамганы нэр: {{$route.params.name}}</h5>
                        <h5 class="card-title">Бүртгэгдсэн огноо: {{$route.params.date}}</h5>
                        <h5 class="card-title">Хэрэглэгчдийн тоо: {{$route.params.id}}</h5>
                        <p class="card-text">Бусад мэдээлэл: {{$route.params.define}}</p>
                        <p class="card-text">Энэхүү тамгыг эзэмшигдчид: {{$route.params.define}}</p>
                    </div>
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
      stamps: [],
      id: '',
      lastname: '',
      firstname: '',
      stampname: '',
      location: '',
      date: '',
      publicPath: process.env.BASE_URL
    }
  },
  mounted () {
    this.getTasks()
    this.getStamp()
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
    },
    getStamp () {
      axios.get('/api/stamps').then(
        result => {
          this.stamps = result.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>
