<template>
    <div>
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-4">
                    <button type="button" class="btn btn-primary">Засварлах</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    Овог, нэр:
                </div>
                <div class="col-sm">
                    Хаяг:
                </div>
                <div class="col-sm">
                    Бусад:
                </div>
            </div>
            <div class="row">
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                </div>
        </div>
                <div class="row">
            <!-- <form v-on:submit.prevent="addNewTask()">
                <input v-model="lastname" type="text" id="lastnameinput" class="form-control mt-4" placeholder="Тамганы нэрээ оруул">
                <button v-if="this.isEdit==false" type="submit" class="btn btn-success btn-block mt-4">
                    Submit
                </button>
                <button v-else v-on:click="updateTask()" type="button" class="btn btn-primary btn-block mt-4">
                    Update
                </button>
            </form> -->
            <table class="table">
                <tr v-for="(todo) in todos" v-bind:key="todo.id"
                v-bind:stampname="todo.stampname">
                <td class="text-left">{{todo.id}}</td>
                <td class="text-left">{{todo.stampname}}</td>
                <td class="text-right">
                    <button class="btn btn-info" v-on:click="editTask(todo.lastname,todo.id,todo.firstname, todo.stamp_name, todo.mail, todo.location, todo.date, todo.photo)">Edit</button>
                    <button class="btn btn-danger" v-on:click="deleteTask(todo.id)">Delete</button>
                </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style>
    .row{
        margin: 1rem;
    }
</style>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      todos: [],
      id: '',
      lastname: '',
      firstname: '',
      stampname: '',
      mail: '',
      password: '',
      location: '',
      date: '',
      stampImage: '',
      upload: 'http://localhost:8000/uploads/1571908394930__.png',
      isEdit: false,
      count: 1
    }
  },
  mounted () {
    this.getTasks()
    // location.reload()
  },
  methods: {
    // getImgUrl (put) {
    //   var images = require.context('../assets/tamga/', false, /\.png$/)
    //   return images('./' + put)
    // },
    getTasks () {
      axios.get('/api/stamps').then(
        result => {
          console.log(result.data)
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
      // setTimeout(function () {
      //   location.reload()
      // }, this.count = this.count * 1000)
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
      axios.delete('/api/tamga/' + id)
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
