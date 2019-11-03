<template>
  <div>
    <!-- another version - flat style with animated hover effect -->
    <div class="breadcrumb flat">
        <a href="#" class="active dropdown" v-on:click="bus1()">
          <div class="dropbtn">Бүс</div>
          <div class="dropdown-content">
            Бүс ...
            <select v-model="utga1" id="inputState" class="form-control">
            <option>Баруун бүс</option>
            <option>Зүүн бүс</option>
            <option>Төвийн бүс</option>
            <option>Хангайн бүс</option>
            <option value="0">Бүгд</option>
          </select>
          </div>
        </a>
        <a href="#" class="dropdown" v-if="this.bus==1 && this.utga1!=0" v-on:click="bus2()">
          <div class="dropbtn">{{this.utga1}}</div>
          <div class="dropdown-content">
            Аймаг ...
            <select v-model="utga2" id="inputState" class="form-control">
            <option v-if="utga1=='Баруун бүс'">Баян-Өлгий</option>
            <option v-if="utga1=='Баруун бүс'">Говь-Алтай</option>
            <option v-if="utga1=='Баруун бүс'">Завхан</option>
            <option v-if="utga1=='Баруун бүс'">Увс</option>
            <option v-if="utga1=='Баруун бүс'">Ховд</option>
            <option v-if="utga1=='Хангайн бүс'">Архангай</option>
            <option v-if="utga1=='Хангайн бүс'">Булган</option>
            <option v-if="utga1=='Хангайн бүс'">Баянхонгор</option>
            <option v-if="utga1=='Зүүн бүс'">Говьсүмбэр</option>
            <option v-if="utga1=='Төвийн бүс'">Дархан-Уул</option>
            <option v-if="utga1=='Зүүн бүс'">Дорноговь</option>
            <option v-if="utga1=='Зүүн бүс'">Дорнод</option>
            <option v-if="utga1=='Төвийн бүс'">Дундговь</option>
            <option v-if="utga1=='Хангайн бүс'">Орхон</option>
            <option v-if="utga1=='Хангайн бүс'">Өвөрхангай</option>
            <option v-if="utga1=='Төвийн бүс'">Өмнөговь</option>
            <option v-if="utga1=='Зүүн бүс'">Сүхбаатар</option>
            <option v-if="utga1=='Төвийн бүс'">Сэлэнгэ</option>
            <option v-if="utga1=='Төвийн бүс'">Төв</option>
            <option v-if="utga1=='Хангайн бүс'">Хөвсгөл</option>
            <option v-if="utga1=='Зүүн бүс'">Хэнтий</option>
            <option value=''>Бүгд</option>
          </select>
          </div>
        </a>
        <a href="#" v-if="this.buse2==1 && this.utga2!='' && this.utga1!=''">
          {{this.utga2}}
        </a>
    </div>
    <div id="todo-list-example" class="container">
      <div class="row">
        <div v-for="(todo) in todos" v-bind:key="todo.id" v-bind:define="todo.define" v-bind:date="todo.date" v-bind:stampname="todo.stampname" v-bind:stampImage="todo.stampImage" v-bind:location="todo.location">
          <div class="card avatar" style="width: 18rem; margin:20px" v-if="utga1==0">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Баруун бүс' && todo.location==utga2">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Баруун бүс' && (todo.location=='Говь-Алтай' || todo.location=='Завхан' || todo.location=='Ховд' || todo.location=='Баян-Өлгий' || todo.location=='Увс') && utga2=='' ">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Зүүн бүс' && todo.location==utga2">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Зүүн бүс' && (todo.location=='Говьсүмбэр' || todo.location=='Дорнод' || todo.location=='Дорноговь' || todo.location=='Сүхбаатар' || todo.location=='Хэнтий')  && utga2==''">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Хангайн бүс' && todo.location==utga2">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Хангайн бүс' && (todo.location=='Архангай' || todo.location=='Булган' || todo.location=='Баянхонгор' || todo.location=='Орхон' || todo.location=='Өвөрхангай' || todo.location=='Хөвсгөл') && utga2==''">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Төвийн бүс' && todo.location==utga2">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
          <div class="card avatar" style="width: 18rem; margin:20px" v-else-if="utga1=='Төвийн бүс' && utga2=='' && (todo.location=='Дархан-Уул' || todo.location=='Дундговь' || todo.location=='Сэлэнгэ' || todo.location=='Төв')">
            <img :src="require('../assets/tamga/'+todo.stampImage)" class="card-img-top g-image" alt="tamga">
            <div class="card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title">{{todo.stampname}}</h5>
              <p class="card-text">{{todo.define}}</p>
              <router-link :to="/stamp/+todo.id+' /'+todo.stampname+' /'+todo.define+' /'+todo.date+'/'">
                <a class="btn btn-primary">Дэлгэрэнгүй</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['stampImage'],
  data () {
    return {
      bus: 0,
      buse2: 0,
      aimag: '',
      utga1: 0,
      utga2: '',
      todos: [],
      id: '',
      stampname: '',
      location: '',
      date: '',
      // stampImage: '',
      publicPath: process.env.BASE_URL,
      counter: true
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      axios.get('/api/stamps').then(
        result => {
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    },
    bus1 () {
      this.bus = 1
      this.utga2 = ''
      // this.utga1 = null
    },
    bus2 () {
      this.buse2 = 1
    }
  }
}
</script>
<style>
.photo{
  width: 64px;
  height: 64px;
}
.row{
  grid-template-columns: auto auto auto;
  width:90%;
  margin-left: auto;
  margin-right: auto;
}
@import url(https://fonts.googleapis.com/css?family=Merriweather+Sans);

* {margin: 0; padding: 0;}

html, body {min-height: 100%;}

body {
  font-family: 'Merriweather Sans', arial, verdana;
}

.breadcrumb {
  counter-reset: flag;
  text-align: center;
}
.breadcrumb a {
  text-decoration: none;
  outline: none;
  display: block;
  float: left;
  font-size: 12px;
  line-height: 36px;
  color: white;
  /*need more margin on the left of links to accomodate the numbers*/
  padding: 0 10px 0 60px;
  position: relative;
}
/*since the first link does not have a triangle before it we can reduce the left padding to make it look consistent with other links*/
.breadcrumb a:first-child {
  padding-left: 46px;
  border-radius: 5px 0 0 5px; /*to match with the parent's radius*/
}
.breadcrumb a:first-child:before {
  left: 14px;
}
.breadcrumb a:last-child {
  border-radius: 0 5px 5px 0; /*this was to prevent glitches on hover*/
  padding-right: 20px;
}
/*adding the arrows for the breadcrumbs using rotated pseudo elements*/
.breadcrumb a:after {
  content: '';
  position: absolute;
  top: 0;
  right: -18px;
  width: 36px;
  height: 36px;
  transform: scale(0.707) rotate(45deg);
  /*we need to prevent the arrows from getting buried under the next link*/
  z-index: 1;
  /*stylish arrow design using box shadow*/
  box-shadow:
    2px -2px 0 2px rgba(0, 0, 0, 0.4),
    3px -3px 0 2px rgba(255, 255, 255, 0.1);
  border-radius: 0 5px 0 50px;
}
/*we dont need an arrow after the last link*/
.breadcrumb a:last-child:after {
  content: none;
}
/*we will use the :before element to show numbers*/
.breadcrumb a:before {
  content: counter(flag);
  counter-increment: flag;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 8px 0;
  position: absolute;
  top: 0;
  left: 30px;
  font-weight: bold;
}
.flat a, .flat a:after {
  background: white;
  color: black;
  transition: all 0.5s;
}
.flat a:before {
  background: white;
  box-shadow: 0 0 0 1px #ccc;
}
.flat a:hover, .flat a.active,
.flat a:hover:after, .flat a.active:after{
  background: rgb(67, 132, 230);
}

.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
  color: black;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 150px;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
