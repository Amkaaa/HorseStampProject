<template>
  <header class="header">
    <div class="hcontainer">
      <nav class="nav">
        <div class="logo">
          <nuxt-link to="#"><img src="../assets/logo.jpg" class="logo"></nuxt-link>
        </div>
        <div id="title"><span>Монгол Адууны Тамга</span></div>
        <div class="nav-bar">
          <ul class="list">
            <li class="nav-item"><router-link to="/List" onClick="window.location.reload()">Нүүр</router-link></li>
            <li v-if="!login" class="nav-item"><router-link to="/register">Бүртгэх</router-link></li>
            <li v-if="!login" class="nav-item"><a class="button"><router-link to="/Login">Нэвтрэх</router-link></a></li>
            <li v-if="login" class="nav-item"><router-link to="/createStamp">Тамга бүртгүүлэх</router-link></li>
            <span v-for="(user) in users" v-bind:key="user.id" v-bind:firstname="user.firstname" v-bind:mail="user.mail">
              <li class="nav-item" v-if="user.mail==user1">
                <a class="button">
                  <router-link to="/profile">{{user.firstname}}</router-link>
                </a>
              </li>
            </span>
            <li v-if="login" class="nav-item"><a class="button" v-on:submit.prevent="logout()"><router-link to="/logout" onClick="window.location.reload()">Гарах</router-link></a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
// import EventBus from './EventBus'
import router from '../router'
import axios from 'axios'
export default {
  data () {
    return {
      auth: '',
      user1: 'haha',
      login: 0,
      users: [],
      firstname: '',
      id: '',
      mail: ''
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
      axios.get('/api/user'
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
@media only screen and (min-width: 960px){
  .header{
    width: 100%;
    height: 80px;
    background-image: url("../assets/header/bg.png") !important;
    background-position: right;
  }
  .hcontainer{
    max-width: 960px;
    width: 100%;
    margin: auto;
  }
  .nav{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row;
  }
  .logo{
    flex: 0 1 150px;
    height: 80px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: inherit;
    font-size: 30px;
  }
  #title{
    flex: 0 1 150px;
    height: 80px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-bar{
    flex: 1 1 auto;
    height: 80px;
  }
  .list{
    float: right;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
  .nav-item{
    float:left;
    min-width: 50px;
    padding-right: 15px;
    padding-left: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .link{
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    color: #D5DED9;
  }
  .nav-item .link{
    transition: color 0.4s ease;
  }
  .active .link{
    color: black !important;
  }
  .nav-item:hover .link{
    color: black;
  }
  .button{
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    color: blue;
    padding-right: 25px;
    padding-left: 25px;
    font-weight: 700;
    border-radius: 34px;
    background: white;
    transition: all 0.3s ease;
  }
  .button:hover{
    -webkit-box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
    -moz-box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
    box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
  }
  .inside{
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  a{
      color:#D5DED9;
      transition: color 0.4s ease;
  }
  a:hover{
      color:black;
  }
  .logo{
      width: 50%;
      border-radius: 50%;
  }
  span{
    text-align: center;
  }
}
</style>
