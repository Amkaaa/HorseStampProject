<template>
  <div class="container">
    <form v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
      <div class="form-group">
        <label for="formGroupExampleInput">Эцэг/Эхийн нэр</label>
        <input
          v-model="lastname"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="lastname"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Өөрийн нэр</label>
        <input
          v-model="firstname"
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="firstname"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Мэйл хаяг</label>
          <input
            v-model="mail"
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Нууц үг</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Нууц үг"
          />
        </div>
      </div>
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
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputState">Аймаг/Дүүрэг</label>
          <select v-model="aimag" id="inputState" class="form-control">
            <option selected>Аймаг...</option>
            <option>Архангай</option>
            <option>Булган</option>
            <option>Баянхонгор</option>
            <option>Говь-Алтай</option>
            <option>Чингэлтэй</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputCity">Сум, багийн мэдээлэл</label>
          <input v-model="location" type="text" class="form-control" id="inputCity" />
        </div>
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
            class="custom-file-input"
            name="stampImage"
            ref="file"
            id="file"
            v-on:change="handleFilesUpload()"
          />
          <label class="custom-file-label" for="inputGroupFile04">Зургаа оруул</label>
        </div>
      </div>
      <img v-bind:src="imagePreview" v-show="showPreview"/>
      <button v-on:click="submitFile()" type="submit" class="btn btn-primary">Бүртгүүлэх</button>
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
      lastname: '',
      firstname: '',
      stamp_name: '',
      mail: '',
      password: '',
      location: '',
      date: '',
      stampImage: '',
      define: '',
      aimag: '',
      file: ''
    }
  },

  methods: {
    addNewTask () {
      const formData = new FormData()
      formData.append('file', this.file)
      axios
        .post('/api/task', this.file.stampImage, {
          lastname: this.lastname,
          firstname: this.firstname,
          stamp_name: this.stamp_name,
          mail: this.mail,
          password: this.password,
          location: this.location,
          date: this.date,
          define: this.define,
          file: this.file,
          aimag: this.aimag
        })
        .then(res => {
          this.lastname = ''
          this.firstname = ''
          this.stamp_name = ''
          this.mail = ''
          this.password = ''
          this.location = ''
          this.date = ''
          this.define = ''
          this.stampImage = ''
          this.aimag = ''
          this.getTasks()
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
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
