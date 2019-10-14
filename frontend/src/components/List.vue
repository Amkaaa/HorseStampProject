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
        </div>
        <ul class="list-unstyled">
          <li v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.lastname" v-bind:firstname="todo.firstname" v-bind:date="todo.date" v-bind:stampname="todo.stamp_name" class="media">
            <img src="../assets/logo.jpg" class="mr-3 photo" alt="tamga">
            <div class="media-body">
              <h5 class="mt-0 mb-1">{{todo.stamp_name}}</h5>
              {{todo.id}}
              <span class="tcol-md-3 offset-md-3">{{todo.date}}</span>
            </div>
          </li>
        </ul>
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
      photo: '',
      isEdit: false
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
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
</style>
