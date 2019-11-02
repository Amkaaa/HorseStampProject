<template>
<div></div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  methods: {
    login () {
      axios.post('/api/logout'
      ).then(res => {
        // console.log('dfsd')
        localStorage.removeItem('user')
        router.push({ name: 'List' })
      })
        .catch(err => {
          localStorage.removeItem('user')
          console.log(err.data)
          router.push({ name: 'List' })
        })
    }
  },
  mounted () {
    this.login()
  }
}
</script>
