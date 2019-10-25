<template>
    <form v-on:submit.prevent="login()" class="justify-content-md-center">
    <div class="container ">
        <div class="form-group col col-lg-4">
            <label for="email">Имэйл Хаяг: </label>
            <input type="email" v-model="mail" class="form-control" id="email" name="mail" required>
        </div>
        <div class="form-group col-lg-4">
            <label for="pwd">Нууц үг:</label>
            <input type="password" v-model="password" class="form-control" id="pwd" required>
        </div>
        <div class="form-group form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Нэвтрэх</button>
        <router-link to="register"><button type="button" class="btn btn-secondary">Бүртгүүлэх</button></router-link>
    </div>
    </form>
</template>
<style>
.justify-content-md-center{
    margin-top: 40px;
    width:60%;
    margin-left: auto;
    margin-right: auto;
}
</style>
<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('/api/Login',
        {
          mail: this.mail,
          password: this.password
        }
      ).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.mail = ''
        this.password = ''
        router.push({ name: 'Profile' })
      }).catch((err) => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>
