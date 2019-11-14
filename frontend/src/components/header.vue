<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.jpg" width="50" height="50" class="d-inline-block align-top" alt="Тамга" style="border-radius:50%;">
      Монгол Адууны Тамга</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Нүүр</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Мэдээлэл</router-link>
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
        <span v-for="(user) in users" v-bind:key="user.id" v-bind:firstname="user.firstname" v-bind:mail="user.mail">
          <li class="nav-item mr-2" v-if="user.mail==user1">
            <router-link to="/profile">
              <button type="button" class="btn btn-primary ">{{user.firstname}}
              </button>
            </router-link>
          </li>
        </span>
        <li v-if="login" >
            <router-link to="/logout"><button type="button" v-on:submit.prevent="logout()" class="btn btn-secondary">Гарах</button></router-link>
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
  .navbar{
    background-image: url("../assets/header/bg.png") !important;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
