<!--Энд нэг тамганы дэлгэрэнгүй мэдээллийг харуулах болно-->

<template>
    <div>
      <Navi/>
      <div class="container">
        <div v-for="(todo) in stamps" v-bind:key="todo.id">
          <div class="row no-gutters" v-if="$route.params.id==todo.id">
            <div class="stampImg">
              <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img" alt="...">
            </div>
            <div class="stampName">
              <h2>{{$route.params.name}}</h2>
              <h4>Тамганы төрөл: {{todo.typeStamp}}</h4>
              <h5>Тамганы билгэдэл: {{todo.bilgedel}}</h5>
              <h5>Байршил: {{todo.location}}</h5>
              <h5>Бүртгэгдсэн огноо: {{$route.params.date}}</h5>
            </div>
            <div class="small-container">
              <div v-for="user in todos" v-bind:key="user.id" class="stampInfo">
                <div v-if="todo.userid==user.id">
                  <h1>Дэлгэрэнгүй</h1>
                  <p>{{todo.define}} Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                    d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis a
                    ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                    a pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru
                    nt mollit anim id est laborum.</p>
                  <h6>Эзэмшигчийн тухай мэдээлэл: </h6>
                    <p>{{user.firstname}}, {{user.phone}}, {{user.aimag}}, {{user.location}}</p>
                  <h6>Хэрэглэгчдийн тоо: </h6>
                    <p> {{count % 100}}</p>
                  <h6>Хэдэн үе ашиглаж байгаа: </h6>
                    <p>{{todo.uy}}</p>
                </div>
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
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  .container{
    font-family: 'Open Sans', 'Poppins', sans-serif;
    width: 70%;
    margin-top: 50px;
    padding: 0;
    background: rgb(100, 151, 177);
    box-shadow: 5px 10px 11px rgba(0, 0, 0, 0.5);
  }
  .row{
    width: 100%;
    padding: 0;
    margin: 0;
  }
  h1{
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
  }
  h2{
    color: black;
    font-weight: 650;
    padding: 20px;
    margin-left: 30px;
    margin-top: 30px;
  }
  h4{
    color: gold;
    font-weight: 500;
    margin-left: 50px;
    margin-top: -5px;
    font-size: 16px;
  }
  h5{
    color: gold;
    font-weight: 500;
    margin-left: 50px;
    font-size: 16px;
    margin-top: 25px;
  }
  h6{
    font-weight: 700;
  }
  .stampImg img{
    background-color: white;
    border-radius: 20px 80px 80px;
    box-shadow: 5px 3px 8px rgb(0,0,0,0.5);
    width: 250px;
    height: 250px;
    margin-top: 50px;
    margin-left: 50px;
  }
  .small-container{
    background: white;
    text-align: justify;
    padding: 20px;
    margin: 30px 20px;
    box-shadow: 5px 3px 8px rgb(0,0,0,0.5);
    width: 100%;
  }
  p::first-letter{
    text-transform: capitalize;
  }
</style>
