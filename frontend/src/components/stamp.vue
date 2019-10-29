<!--Энд нэг тамганы дэлгэрэнгүй мэдээллийг харуулах болно-->
<template>
    <div>
        <div v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:firstname="todo.firstname" v-bind:date="todo.date" v-bind:stampname="todo.stamp_name" v-bind:stampImage="todo.stampImage">
        <div class="card mb-3" style="max-width: 100%;"  v-if="todo.id==$route.params.id">
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
