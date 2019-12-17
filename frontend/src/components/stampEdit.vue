<template>
<div class="outside">
  <Navi/>
  <div class="container-haha">
    <br>
    <h1 style="text-align:center">Мэдээллийг шинэчлэх</h1>
    <br>
    <form v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputname">Тамганы нэр</label>
          <input
            v-model="stampname"
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Энд бичнэ үү"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="exampleFormControlSelect1">Хэдэн үеэрээ ашиглаж байгаа вэ</label>
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
          <!-- <label for="inputId">Хэрэглэгчийн Дугаар &nbsp;</label> -->
          <input hidden v-model="user.id" type="number" class="form-control" disabled/>
        <div class="form-group col-md-4">
          <label for="inputLocation">Хэрэглэгчийн Хаяг&nbsp;</label>
          <select v-model="aimag" id="inputState" class="form-control" required>
            <option>Архангай</option>
            <option>Баян-Өлгий</option>
            <option>Булган</option>
            <option>Баянхонгор</option>
            <option>Говь-Алтай</option>
            <option>Говьсүмбэр</option>
            <option>Дархан-Уул</option>
            <option>Дорноговь</option>
            <option>Дорнод</option>
            <option>Дундговь</option>
            <option>Завхан</option>
            <option>Орхон</option>
            <option>Өвөрхангай</option>
            <option>Өмнөговь</option>
            <option>Сүхбаатар</option>
            <option>Сэлэнгэ</option>
            <option>Төв</option>
            <option>Увс</option>
            <option>Ховд</option>
            <option>Хөвсгөл</option>
            <option>Хэнтий</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Тамганы талаарх дэлгэрэнгүй мэдээлэл</label>
        <textarea
          v-model="define"
          class="form-control"
          id="inputAddress2"
          placeholder="Хаана хэрхэн үүссэн талаарх мэдээллийг оруулна"
        ></textarea>
      </div>
      <div class="form-row">
                <div class="form-group col-md-4">
          <label for="inputState">Тухайн тамганы төрөл буюу ангилал</label>
          <select v-model="type" id="inputState" class="form-control">
            <option selected>Ургамал</option>
            <option>Ан, амьтан</option>
            <option>Газар, ус</option>
            <option>Эд зүйлс</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="bilgedel">Энэхүү тамганы Билгэдлийг нь бичнэ үү</label>
          <input v-model="bilgedel" type="text" class="form-control" id="bilgedel" placeholder="Билгэдлийг нь энд бичнэ..."/>
        </div>
      </div>
      <div id="stampimg1">
          <label for="inputState">Одоо байгаа тамганы зураг</label>
          <label>{{stampImage}}</label>
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
      <br>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" required />
          <label class="form-check-label" for="gridCheck">Оруулсан мэдээлэл үнэн</label>
        </div>
      </div>
      <div class="alert alert-info" role="alert" v-if="msg!=''">
        {{msg}}
      </div>
      <button type="submit" class="btn btn-primary burtguul">Бүртгүүлэх</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Navi from './header.vue'
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
      files: [],
      aimag: '',
      user1: '',
      user: ''
    }
  },
  components: {
    Navi
  },
  mounted () {
    if (localStorage.user) {
      this.user1 = localStorage.user
      this.login = 1
    }
    this.getUsers()
    this.getstamp()
  },
  methods: {
    handleFilesUpload (event) {
      this.stampImage = event.target.files[0]
    },
    getstamp () {
      axios.get('api/tamga/' + this.$route.params.id).then(
        result => {
          this.todos = result.data
          this.stampname = result.data.stampname
          this.bilgedel = result.data.bilgedel
          this.define = result.data.define
          this.type = result.data.typeStamp
          this.aimag = result.data.location
          this.userid = result.data.userid
          this.uy = result.data.uy
          this.stampImage = result.data.stampImage
        })
        .catch((err) => {
          this.msj = err
        })
    },
    addNewTask () {
      console.log(this.stampname)
      let formData = new FormData()
      formData.append('stampImage', this.stampImage)
      axios
        .post('/api/photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          axios.put('/api/tamga/' + this.$route.params.id,
            { stampImage: res.data,
              stampname: this.stampname,
              date: this.date,
              define: this.define,
              type: this.type,
              uy: this.uy,
              bilgedel: this.bilgedel,
              userid: this.user.id,
              location: this.aimag })
            .then(res => {
              this.stampname = ''
              this.date = ''
              this.define = ''
              this.stampImage = ''
              this.bilgedel = ''
              this.uy = ''
              this.type = ''
              this.msg = 'Амжилттай Шинэчлэгдлээ...'
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUsers () {
      axios.get('/api/user/' + this.user1
      ).then(
        result => {
          this.user = result.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>

<style>
div.outside{
  padding: 0;
  margin: 0;
  width: 100%;
}
.container-haha{
  font-family: 'Open Sans', 'Poppins', sans-serif;
  text-align: center;
  width: 70%;
  margin: auto;
  margin-top: 50px;
  padding: 30px 50px;
  background: rgb(100, 151, 177);
  box-shadow: 5px 10px 11px rgba(0, 0, 0, .5);
}
#stampimg1{
    width: 200px;
}
.photo {
  width: 64px;
  height: 64px;
}
.burtguul {
  margin-top: 20px;
}
</style>
