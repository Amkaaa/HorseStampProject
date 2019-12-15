<template>
  <div>
    <Navi/><br><br>
      <div class="container-fluid container">
        <div class="row content">
          <div class="col-sm-3 sidenav text-center pt-3 pl-0">
            <h4><i class="fa fa-user pro" style="color: blue;"></i>{{users.firstname}}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Хаяг: {{users.aimag}}</li>
              <li class="list-group-item"><i class="fa fa-envelope-o" aria-hidden="true"></i> {{users.mail}}</li>
              <li class="list-group-item"><i class="fa fa-phone" aria-hidden="true"></i> {{users.phone}}</li>
            </ul>
          </div>
          <div class="col-sm-8 ml-3">
            <h4>Миний бүртгүүлсэн тамга</h4><br>
            <div v-for="(todo) in todos" v-bind:key="todo.id">
                <table class="table">
                  <tr class="ok">
                    <td class="stazurag"><img :src="require('../assets/tamga/'+todo.stampImage)" alt=""></td>
                    <td class="text-left">{{todo.stampname}}</td>
                    <td class="text-right">
                        <button class="btn btn-info" v-on:click="editTask(todo.id)">Edit</button>
                        <button class="btn btn-danger" v-on:click="deleteTask(todo.id)">Delete</button>
                    </td>
                  </tr>
                </table>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Navi from '@/components/header.vue'
import axios from 'axios'
import router from '@/router'
export default {
  data () {
    return {
      users: '',
      todos: [],
      id: '',
      aimag: '',
      lastname: '',
      firstname: '',
      stampname: '',
      mail: '',
      password: '',
      location: '',
      date: '',
      stampImage: '',
      isEdit: false,
      count: 1
    }
  },
  components: {
    Navi
  },
  mounted () {
    // location.reload()
    if (localStorage.user) {
      this.user1 = localStorage.user
      this.login = 1
    }
    this.getUsers()
  },
  methods: {
    // getImgUrl (put) {
    //   var images = require.context('../assets/tamga/', false, /\.png$/)
    //   return images('./' + put)
    // },
    getUsers () {
      axios.get('/api/user/' + this.user1
      ).then(
        result => {
          this.users = result.data
          this.getTasks(result.data.id)
        },
        error => {
          console.error(error)
        }
      )
    },
    getTasks (id) {
      axios.get('/api/tamgas/' + id).then(
        result => {
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
    editTask (id) {
      router.push({ path: '/stampEdit/' + id + '/' })
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
  .sidenav {
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,107,1) 100%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.37), 0 6px 20px 0 rgba(0, 0, 0, 0.411);
    border-radius: 30px;
    height: 100%;
  }
  .list-group-item{
    color: black;
    background:none;
  }
  .list-group-item:hover{
    opacity: 0.8;
    background: rgba(255, 255, 255, 0.295);
  }
  .stazurag{
    width: 70px;
  }
  .ok{
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.37), 0 6px 20px 0 rgba(0, 0, 0, 0.411);
  }
  .pro{
    font-size: 30px;
    margin-right: 10px
  }
</style>
