<template>
  <div class="container">
    <form v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
      <div class="form-group">
        <label for="inputname">Тамганы нэр</label>
        <input
          v-model="stampname"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Энд бичнэ үү"
        />
      </div>
      <div class="form-group">
        <label for="inputdefine">Тамганы талаарх дэлгэрэнгүй мэдээлэл</label>
        <input
          v-model="define"
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Хаана хэрхэн үүссэн талаарх мэдээллийг оруулна"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="exampleFormControlSelect1">Тухайн тамгыг хэдэн үеээрээ ашиглаж байгаа вэ</label>
          <select v-model="uy" class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
                <div class="form-group col-md-4">
          <label for="inputState">Төрөл буюу ангилал</label>
          <select v-model="type" id="inputState" class="form-control">
            <option selected>Ургамал</option>
            <option>Ан, амьтан</option>
            <option>Газар, ус</option>
            <option>Эд зүйлс</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputCity">Билгэдлийг нь бичнэ үү</label>
          <input v-model="bilgedel" type="text" class="form-control" id="inputCity" placeholder="Билгэдлийг нь энд бичнэ..."/>
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
            required
          />
          <label class="custom-file-label" for="inputGroupFile04">Тамганы Зургаа оруул</label>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" required />
          <label class="form-check-label" for="gridCheck">Оруулсан мэдээлэл үнэн</label>
        </div>
      </div>
      <div class="alert alert-info" role="alert">
        {{msg}}
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
      stampname: '',
      bilgedel: '',
      date: '',
      stampImage: '',
      define: '',
      userid: '',
      msg: '',
      type: '',
      uy: '',
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
            stampname: this.stampname,
            date: this.date,
            define: this.define,
            type: this.type,
            uy: this.uy,
            bilgedel: this.bilgedel
          })
            .then(res => {
              this.stampname = ''
              this.date = ''
              this.define = ''
              this.stampImage = ''
              this.bilgedel = ''
              this.uy = ''
              this.type = ''
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
