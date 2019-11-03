<template>
  <div class="container">
    <form v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="formGroupExampleInput">Эцэг/Эхийн нэр</label>
        <input
          v-model="lastname"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="lastname"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="formGroupExampleInput2">Өөрийн нэр</label>
        <input
          v-model="firstname"
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="firstname"
        />
      </div>
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
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputState">Аймаг</label>
          <select v-model="aimag" id="inputState" class="form-control">
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
      lastname: '',
      firstname: '',
      mail: '',
      password: '',
      location: '',
      date: '',
      aimag: '',
      files: [],
      msg: ''
    }
  },

  methods: {
    addNewTask () {
      axios.post('/api/task', {
        lastname: this.lastname,
        firstname: this.firstname,
        mail: this.mail,
        password: this.password,
        location: this.location,
        date: this.date,
        aimag: this.aimag
      })
        .then(res => {
          if (res.data === 0) {
            this.msg = 'Error: "Таны оруулсан мэйл бүртгэлтэй байна."'
          } else {
            this.msg = 'Амжилттай бүртгүүллээ'
          }
          // this.lastname = ''
          // this.firstname = ''
          // this.mail = ''
          // this.password = ''
          // this.location = ''
          // this.date = ''
          // this.aimag = ''
        })
        .catch(err => {
          this.msg = err.data
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
