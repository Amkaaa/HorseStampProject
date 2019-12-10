<template>
    <div>
      <Navi/>
      <!-- multistep form -->
      <form id="msform" v-on:submit.prevent="addNewTask()" enctype="multipart/form-data">
        <!-- progressbar -->
        <ul id="progressbar">
          <li class="active">Account Setup</li>
          <li style="width:50px">Social Profiles</li>
          <li>Personal Details</li>
        </ul>
        <!-- fieldsets -->
        <fieldset>
          <h2 class="fs-title">Тамга бүртгэх</h2>
          <h3 class="fs-subtitle">1-р хэсэг</h3>
          <input hidden v-model="user.id" type="number" class="form-control" disabled/>
          <input type="text" v-model="stampname" placeholder="Тамганы нэр" />
          <select v-model="type" id="inputState" class="form-control">
            <option selected>Төрөл сонгох ...</option>
            <option>Ургамал</option>
            <option>Ан, амьтан</option>
            <option>Газар, ус</option>
            <option>Эд зүйлс</option>
          </select>
          <textarea
          v-model="bilgedel"
          class="form-control mt-2"
          id="inputAddress2"
          placeholder="Энэхүү тамганы билгэдлийг нь бичнэ үү"
        ></textarea>
          <input type="button" name="next" class="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Тамга бүртгэх</h2>
          <h3 class="fs-subtitle">2-р хэсэг</h3>
          <select v-model="aimag" class="form-control" required>
            <option selected>Газар нутаг</option>
            <option>{{user.aimag}}</option>
          </select>
          <select v-model="uy" class="form-control mt-2" id="exampleFormControlSelect1">
            <option selected>Хэдэн үе ашиглаж байгаа вэ?</option>
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
          <textarea
          v-model="define"
          class="form-control mt-2"
          id="inputAddress2"
          placeholder="Хаана хэрхэн үүссэн талаарх мэдээллийг оруулна"
        ></textarea>
          <input type="button" name="previous" class="previous action-button" value="Previous" />
          <input type="button" name="next" class="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Тамганы зураг</h2>
          <h3 class="fs-subtitle">3-р хэсэг</h3>
          <i class="fa fa-camera" aria-hidden="true" style="margin-right:10px;text-align: center; font-size: 100px">
          </i>
          <div class="file-upload-wrapper">
            <input type="file"
            class="file-upload"
            id="file"
            name="stampImage"
            @change="handleFilesUpload"
            multiple
            required
            />
          </div>
          <div class="alert alert-info" role="alert" v-if="msg!=''">
            {{msg}}
          </div>
          <input type="button" name="previous" class="previous action-button" value="Previous" />
          <input type="submit" name="submit" class="submit action-button" value="Submit" />
        </fieldset>
      </form>
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
      type: 'Төрөл сонгох ...',
      uy: 'Хэдэн үе ашиглаж байгаа вэ?',
      files: [],
      aimag: 'Газар нутаг',
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
/*custom font*/
@import url(https://fonts.googleapis.com/css?family=Montserrat);

/*basic reset*/
* {margin: 0; padding: 0;}

body {
  font-family: montserrat, arial, verdana;
}
/*form styles*/
#msform {
  width: 400px;
  margin: 50px auto;
  text-align: center;
  position: relative;
}
#msform fieldset {
  background: white;
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;

  /*stacking fieldsets above each other*/
  position: relative;
}
/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
  display: none;
}
/*inputs*/
#msform input, #msform textarea {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2C3E50;
  font-size: 13px;
}
/*buttons*/
#msform .action-button {
  width: 100px;
  background: #27AE60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
}
#msform .action-button:hover, #msform .action-button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
  font-size: 15px;
  text-transform: uppercase;
  color: #2C3E50;
  margin-bottom: 10px;
}
.fs-subtitle {
  font-weight: normal;
  font-size: 13px;
  color: #666;
  margin-bottom: 20px;
}
/*progressbar*/
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  /*CSS counters to number the steps*/
  counter-reset: step;
}
#progressbar li {
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
}
#progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 20px;
  line-height: 20px;
  display: block;
  font-size: 10px;
  color: #333;
  background: white;
  border-radius: 3px;
  margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
content: '';
width: 100%;
height: 2px;
background: white;
position: absolute;
left: -50%;
top: 9px;
z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
/*connector not needed before the first step*/
  content: none;
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
  background: #27AE60;
  color: white
}
</style>
