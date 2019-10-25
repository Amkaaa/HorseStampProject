<template>
    <div>
      <form action="">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Мэйл хаяг</label>
                <input v-model="mail" type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputPassword4">Нууц үг</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword4" placeholder="Нууц үг">
            </div>
        </div>
        <input type="file" ref="file" id="file" v-on:change="handlingPhoto">
        <button type="submit" v-on:click="submitPhoto"></button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      file: '',
      mail: '',
      password: ''
    }
  },
  methods: {
    handlingPhoto () {
      this.file = this.$refs.file.files[0]
    },
    submitPhoto () {
      let formData = new FormData()
      formData.append('file', this.file)
      axios.post('/api/task',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          mail: this.mail,
          password: this.password
        }
      ).then(function (data) {
        console.log(data.data)
      })
        .catch(function () {
          console.log('FAILURE!!')
        })
    }
  }
}
</script>
