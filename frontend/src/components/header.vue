<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.jpg" width="75px" height="75px" class="d-inline-block align-top" alt="Тамга" style="border-radius:50%;">
      <h2 style="font-size:20px">Монгол Адууны Тамга</h2>
    </router-link>
        <v-spacer></v-spacer>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse right" id="navbarNav">
      <ul class="navbar-nav snip1217">
        <li class="nav-item active current">
          <router-link to="/" class="nav-link font-weight-bold" onClick="window.location.reload()">Нүүр</router-link>
        </li>
        <li v-if="!login" class="nav-item">
          <router-link to="/register" class="nav-link">Бүртгэх</router-link>
        </li>
        <li v-if="!login" class="nav-item">
          <a class="button"><router-link to="/Login" class="nav-link">Нэвтрэх</router-link></a>
        </li>
        <li v-if="login" class="nav-item">
          <router-link to="/createStamp" class="nav-link">Тамга бүртгүүлэх</router-link>
        </li>
        <!-- User Profile Icon хийх -->
        <span v-for="(user) in users" v-bind:key="user.id" v-bind:firstname="user.firstname" v-bind:mail="user.mail">
          <li class="nav-item mr-2" v-if="user.mail==user1">
            <router-link to="/profile">
              <button type="button" class="btn btn-primary ">
                <i class="fa fa-user-circle" aria-hidden="true" style="margin-right:10px; color: white"></i>{{user.firstname}}
              </button>
            </router-link>
          </li>
        </span>
        <li v-if="login" >
            <router-link to="/logout"><button type="button" v-on:submit.prevent="logout()" class="btn btn-secondary"> <i class="fa fa-sign-out" aria-hidden="true" style="margin-right:10px; color: white"></i>Гарах</button></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Бидний тухай</router-link>
        </li>
      </ul>
      <!-- <form class="form-inline" ml-5>
        <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>
</template>

<script>
// import EventBus from './EventBus'
import router from '../router'
import axios from 'axios'
export default {
  data () {
    return {
      auth: '',
      users: [],
      firstname: '',
      id: '',
      mail: '',
      login: 0,
      user1: 'hahah',
      noots: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
      localStorage.removeItem('user')
      this.login = 0
      router.push({ name: 'list' })
    },
    getUsers () {
      axios.get('/api/user', {
        mail: localStorage.user
      }
      ).then(
        result => {
          this.users = result.data
        },
        error => {
          console.error(error)
        }
      )
    }
  },
  mounted () {
    // EventBus.$on('logged-in', status => {
    //   this.auth = status
    // }),
    if (localStorage.user) {
      this.user1 = localStorage.user
      this.login = 1
    }
    this.getUsers()
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,800');
.snip1217 {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 1px;
}
.snip1217 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1217 li {
  display: inline-block;
  list-style: outside none none;
  margin: 10px 10px;
  padding: 0;
}
.snip1217 .nav-link {
  padding: 0.3em 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  position: relative;
  text-decoration: none;
  display: inline-block;
}
.snip1217 .nav-link:before,
.snip1217 .nav-link:after {
  height: 3px;
  position: absolute;
  content: '';
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  background-color: white;
  width: 0;
}
.snip1217 .nav-link:before {
  top: 0;
  left: 0;
}
.snip1217 .nav-link:after {
  bottom: 0;
  right: 0;
}
.snip1217 .nav-link:hover,
.snip1217 .current .nav-link {
  color: #ffffff !important;
}
.snip1217 .nav-link:hover:before,
.snip1217 .current .nav-link:before,
.snip1217 .nav-link:hover:after,
.snip1217 .current .nav-link:after {
  width: 100%;
}
/* Demo purposes only */
/* body {
  background-color: #212121;
} */
  .navbar{
    /* background-image: url("../assets/header/bg.png") !important; */
    background-color: rgb(3, 31, 75) !important;
    font-family: 'Montserrat', sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    position: sticky;
  }
  .navbar-brand h2{
    float: right;
    margin-top: 15px;
    padding: 5px 20px;
    color: white;
  }
  a.nav-link{
    color: grey !important;
  }
  .right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
  li{
    margin-left: 20px;
    color: white;
  }
</style>
