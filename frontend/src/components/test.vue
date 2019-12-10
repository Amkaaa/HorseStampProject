<template>
<div class="outside">
  <Navi/>
  <div class="container-haha">
    <br>
    <h1 style="text-align:center">Тамга бүртгэлийн хэсэг</h1>
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
          <label for="inputLocation">Хэрэглэгчийн Хаяг&nbsp; {{user.aimag}}</label>
          <select v-model="aimag" id="inputState" class="form-control" required>
            <option v-if="user.aimag=='Архангай'">Архангай</option>
            <option v-if="user.aimag=='Баян-Өлгий'">Баян-Өлгий</option>
            <option v-if="user.aimag=='Булган'">Булган</option>
            <option v-if="user.aimag=='Баянхонгор'">Баянхонгор</option>
            <option v-if="user.aimag=='Говь-Алтай'">Говь-Алтай</option>
            <option v-if="user.aimag=='Говьсүмбэр'">Говьсүмбэр</option>
            <option v-if="user.aimag=='Дархан-Уул'">Дархан-Уул</option>
            <option v-if="user.aimag=='Дорноговь'">Дорноговь</option>
            <option v-if="user.aimag=='Дорнод'">Дорнод</option>
            <option v-if="user.aimag=='Дундговь'">Дундговь</option>
            <option v-if="user.aimag=='Завхан'">Завхан</option>
            <option v-if="user.aimag=='Орхон'">Орхон</option>
            <option v-if="user.aimag=='Өвөрхангай'">Өвөрхангай</option>
            <option v-if="user.aimag=='Өмнөговь'">Өмнөговь</option>
            <option v-if="user.aimag=='Сүхбаатар'">Сүхбаатар</option>
            <option v-if="user.aimag=='Сэлэнгэ'">Сэлэнгэ</option>
            <option v-if="user.aimag=='Төв'">Төв</option>
            <option v-if="user.aimag=='Увс'">Увс</option>
            <option v-if="user.aimag=='Ховд'">Ховд</option>
            <option v-if="user.aimag=='Хөвсгөл'">Хөвсгөл</option>
            <option v-if="user.aimag=='Хэнтий'">Хэнтий</option>
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
          <label for="inputCity">Энэхүү тамганы Билгэдлийг нь бичнэ үү</label>
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
import Navi from './header'
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
            bilgedel: this.bilgedel,
            userid: this.user.id,
            location: this.aimag
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
    },
    getUsers () {
      axios.get('/api/user/' + this.user1
      ).then(
        result => {
          this.user = result.data
          console.log(this.user)
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
.photo {
  width: 64px;
  height: 64px;
}
.burtguul {
  margin-top: 20px;
}
</style>
