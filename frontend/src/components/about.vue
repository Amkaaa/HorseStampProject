<template>
    <div>
        <Navi />
        <div class="parallax">
        <div class="row text-center">
            <div class="col-sm artal">
            <div class="display-3 too">{{too}}</div>
            <div class="text">Тамга</div>
            </div>
            <div class="col-sm artal">
            <div class="display-3 too">{{too2}}</div>
            <div class="text">Аймаг</div>
            </div>
            <div class="col-sm artal">
            <div class="display-3 too">{{toos}}</div>
            <div class="text">Хэрэглэгч</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Navi from './header'
export default {
  data () {
    return {
      too: 0,
      toos: 0,
      too2: 0
    }
  },
  components: {
    Navi
  },
  computed: {
    percent () {
      return this.too.toFixed()
    }
  },
  created () {
    var intval = setInterval(() => {
      if (this.too < 100) {
        this.too += 1
      } else if (this.too2 < 17) {
        this.too2 += 1
      } else if (this.toos < 150) {
        this.toos += 1
      } else {
        clearInterval(intval)
      }
    }, 10)
  }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.parallax{
  width: 100%;
  background-image: url("../assets/bg/mori3.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
}
.col-sm:hover{
  background: #0000009a;
  cursor: none;
}
.too{
  color: rgb(48, 131, 208);
  font-family: "Times New Roman", Times, serif;
  text-shadow: 1px 0 2px rgb(48, 131, 208), 2px 0 9px #ab12da;
  font-size: 5rem;
}
.text{
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: rgb(255, 192, 56);
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 4px 2px 4px #000000;
}
.artal{
  background: rgba(0, 0, 0, 0.411);
  margin-left: 20px;
  margin-right: 20px;
  height: 200px;
  padding-top: 2rem;
}
@media only screen and (max-width: 767px) {
  .col-sm{
    margin-left: 10px;
    margin-right: 10px;
  }
}
@media only screen and (min-width: 768px) {
  .col-sm{
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
