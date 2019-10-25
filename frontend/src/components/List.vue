<template>
    <div id="todo-list-example" class="container">
        <div class="row">
            <form v-on:submit.prevent="addNewTask()">
                <input v-model="lastname" type="text" id="lastnameinput" class="form-control mt-4" placeholder="Тамганы нэрээ оруул">
                <button v-if="this.isEdit==false" type="submit" class="btn btn-success btn-block mt-4">
                    Submit
                </button>
                <button v-else v-on:click="updateTask()" type="button" class="btn btn-primary btn-block mt-4">
                    Update
                </button>
            </form>
            <table class="table">
                <tr v-for="(todo) in todos" v-bind:key="todo.id"
                v-bind:title="todo.lastname">
                <td class="text-left">{{todo.id}}</td>
                <td class="text-left">{{todo.lastname}}</td>
                <td class="text-right">
                    <button class="btn btn-info" v-on:click="editTask(todo.lastname,todo.id,todo.firstname, todo.stamp_name, todo.mail, todo.location, todo.date, todo.photo)">Edit</button>
                    <button class="btn btn-danger" v-on:click="deleteTask(todo.id)">Delete</button>
                </td>
                </tr>
            </table>
        <div class="card" style="width: 18rem; margin:20px" v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:firstname="todo.firstname" v-bind:date="todo.date" v-bind:stampname="todo.stamp_name" v-bind:stampImage="todo.stampImage">
          <!--<img :link="require('../assets/tamga/'+todo.stampImage)" class="card-img-top" alt="tamga">-->
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
      mail: '',
      password: '',
      location: '',
      date: '',
      stampImage: '',
      upload: 'http://localhost:8000/uploads/1571908394930__.png',
      isEdit: false
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
          console.log(result.data)
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    },
    addNewTask () {
      axios.post('/api/task',
        { lastname: this.lastname },
        { firstname: this.firstname },
        { stamp_name: this.stamp_name },
        { mail: this.mail },
        { password: this.password },
        { location: this.location },
        { date: this.date },
        { photo: this.photo })
        .then((res) => {
          this.lastname = ''
          this.firstname = ''
          this.stamp_name = ''
          this.mail = ''
          this.password = ''
          this.location = ''
          this.date = ''
          this.photo = ''
          this.getTasks()
        }).catch((err) => {
          console.log(err)
        })
    },
    editTask (title, id, firstname, stampname, mail, location, date, photo) {
      this.id = id
      this.lastname = title
      this.firstname = firstname
      this.stamp_name = stampname
      this.mail = mail
      this.location = location
      this.date = date
      this.photo = photo
      this.isEdit = true
    },
    updateTask () {
      axios.put('/api/task/' + this.id,
        { lastname: this.lastname },
        { firstname: this.firstname },
        { stamp_name: this.stamp_name },
        { mail: this.mail },
        { password: this.password },
        { location: this.location },
        { date: this.date },
        { photo: this.photo })
        .then((res) => {
          this.lastname = ''
          this.firstname = ''
          this.stamp_name = ''
          this.mail = ''
          this.password = ''
          this.location = ''
          this.date = ''
          this.photo = ''
          this.isEdit = false
          this.getTasks()
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteTask (id) {
      axios.delete('/api/task/' + id)
        .then((res) => {
          this.lastname = ''
          this.firstname = ''
          this.stamp_name = ''
          this.mail = ''
          this.password = ''
          this.location = ''
          this.date = ''
          this.photo = ''
          this.getTasks()
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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
