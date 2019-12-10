<template>
  <div>
    <Navi/>
    <div class="container">
      <br>
      <h1>Хэрэглэгч бүртгэх хэсэг</h1>
      <br>
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
            required
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
            required
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
              required
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
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputState"><center>Аймаг</center></label><br><br>
            <select v-model="aimag" id="inputState" class="form-control">
              <option selected>Архангай</option>
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
          <div class="form-group col-md-4">
            <label for="inputCity">Сум, багийн мэдээлэл</label>
            <input v-model="location" type="text" class="form-control" id="inputCity" required/>
          </div>
          <div class="form-group col-md-4">
            <label for="inputPhone">Холбоо барих дугаар</label>
            <input v-model="phone" type="number" class="form-control" id="inputCity" required/>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label" for="gridCheck">Оруулсан мэдээлэл үнэн
              <input class="form-check-input" type="checkbox" id="gridCheck" required />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="alert alert-info" role="alert" v-if="msg!=''">
          {{msg}}
        </div>
        <button type="submit" class="btn btn-primary">Бүртгүүлэх</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navi from './header'
import router from '../router'
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
      msg: '',
      phone: ''
    }
  },
  components: {
    Navi
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
        aimag: this.aimag,
        phone: this.phone
      })
        .then(res => {
          if (res.data === 0) {
            this.msg = 'Error: "Таны оруулсан мэйл бүртгэлтэй байна."'
          } else {
            this.msg = 'Амжилттай бүртгүүллээ'
            axios.post('/api/Login',
              {
                mail: this.mail,
                password: this.password
              }
            ).then(res => {
              this.msg = 'GOOD'
              localStorage.setItem('user', res.data)
              this.mail = ''
              this.password = ''
              router.push({ name: 'profile' })
              this.login = 1
            })
              .catch(err => {
                this.msg = 'Нэвтрэх нэр болон нууц үгээ зөв хийнэ үү'
                console.log(err.data)
              })
          }
          // this.lastname = ''
          // this.firstname = ''
          // this.mail = ''
          // this.password = ''
          // this.location = ''
          // this.date = ''
          // this.aimag = ''
          // this.phone = ''
        })
        .catch(err => {
          this.msg = err.data
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,800');
.container{
  width: 40%;
  background: linear-gradient(0deg, rgba(34,193,195,0.2) 0%, rgba(45,253,107,0.2) 100%);
  margin: auto;
  padding: 20px;
}
.form-row{
  height: auto;
}
.photo {
  width: 64px;
  height: 64px;
}
button {
  margin-top: 20px;
}

/* Hide the browser's default checkbox */
.form-check-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  margin-top: 5px;
  background-color: #eee;
  padding-bottom: 20px;
}

/* On mouse-over, add a grey background color */
.form-check-label:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.form-check-label input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.form-check-label input:checked ~ .checkmark:after {
  display: block;
}
.form-check-label{
  margin-left: 10px;
}
/* Style the checkmark/indicator */
.form-check-label .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
