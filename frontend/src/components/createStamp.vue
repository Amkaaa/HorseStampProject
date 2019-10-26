<template>
  <div class="container">
      <div>{{msg}}</div>
    <form v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
      <div class="form-group">
        <label for="inputname">Тамганы нэр</label>
        <input
          v-model="stamp_name"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Энд бичнэ үү"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Тамганы талаарх дэлгэрэнгүй мэдээлэл</label>
        <input
          v-model="define"
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Энд бичнэ үү"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" required />
          <label class="form-check-label" for="gridCheck">Оруулсан мэдээлэл үнэн</label>
        </div>
      </div>
      <div class="input-group">
        <div class="custom-file">
          <input
            type="file"
            id="file"
            ref="stampImage"
            class="custom-file-input"
            name="stampImage"
            @change="handleFilesUpload"
            multiple
          />
          <label class="custom-file-label" for="inputGroupFile04">Тамганы Зургаа оруул</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Бүртгүүлэх</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      todos: [],
      id: '',
      stamp_name: '',
      location: '',
      date: '',
      stampImage: '',
      define: '',
      userid: '',
      msg: '',
      files: []
    }
  },

  methods: {
    handleFilesUpload (event) {
      this.stampImage = event.target.files[0]
    },
    addNewTask () {
      let formData = new FormData()
      formData.append('stampImage', this.stampImage)
      axios
        .post('/api/photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res)
          axios.post('/api/tamga', {
            stampImage: res.data,
            stampname: this.stamp_name,
            date: this.date,
            define: this.define
          })
            .then(res => {
              this.stamp_name = ''
              this.mail = ''
              this.date = ''
              this.define = ''
              this.stampImage = ''
              this.msg = 'Амжилттай бүртгүүллээ...'
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.photo {
  width: 64px;
  height: 64px;
}
button {
  margin-top: 20px;
}
</style>
