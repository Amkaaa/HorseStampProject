<!--Энд нэг тамганы дэлгэрэнгүй мэдээллийг харуулах болно-->
<template>
    <div>
      <Navi/>
      <br>
        <div v-for="(todo) in stamps" v-bind:key="todo.id">
          <div class="row no-gutters" style="max-width: 100%;" v-if="$route.params.id==todo.id">
                <div class="col-md-4">
                  <br>
                  <p class="display-4 text-capitalize text-center">{{$route.params.name}}</p>
                    <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img" alt="...">
                </div>
                <div v-for="stamp in stamps" v-bind:key="stamp.id">
                  <div v-if="todo.stampname==stamp.stampname">
                    {{counter(count)}}
                  </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5 hoho list-group">
                  <div v-for="user in todos" v-bind:key="user.id">
                  <div v-if="todo.userid==user.id">
                  <p class="display-4 text-capitalize text-center">Мэдээлэл</p>
                  <p class="list-group-item">Эзэмшигчийн мэдээлэл: <span class="text-primary font-weight-bold lolo"> {{user.firstname}}, {{user.phone}}, {{user.aimag}}, {{user.location}}</span></p>
                  <p class="list-group-item">Хэрэглэгчдийн тоо: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary font-weight-bold lolo"> {{count % 100}}</span></p>
                  <p class="list-group-item">Бүртгэгдсэн огноо: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary font-weight-bold lolo"> {{$route.params.date}}</span></p>
                  <p class="list-group-item">Тамганы төрөл:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary font-weight-bold lolo"> {{todo.typeStamp}}</span></p>
                  <p class="list-group-item">Хэдэн үе ашиглаж байгаа: <span class="text-primary font-weight-bold lolo">{{todo.uy}}</span></p>
                  <p class="list-group-item">Тамганы билгэдэл:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary font-weight-bold lolo">{{todo.bilgedel}}</span></p>
                  <p class="list-group-item">Дэлгэрэнгүй мэдээлэл: <span class="text-primary font-weight-bold lolo"> {{$route.params.define}}</span></p>
                  <p class="list-group-item">Байршил: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary font-weight-bold"> {{todo.location}}</span></p>
                  </div>
                  </div>
                </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Navi from './header'
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
      publicPath: process.env.BASE_URL,
      count: 0,
      userid: ''
    }
  },
  components: {
    Navi
  },
  mounted () {
    this.getTasks()
    this.getStamp()
  },
  methods: {
    // imges () {
    //   require('../assets/tamga/se1.png')
    // },
    counter (count) {
      (this.count = (count + 1))
    },
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
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
  .hoho{
    font-family: 'Roboto Condensed', sans-serif;
  }
  .lolo{
    width: 50%;
    height: 100px;
  }
</style>
