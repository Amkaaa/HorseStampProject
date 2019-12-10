<template>
  <div id="app">
    <!-- <Headr/> -->
    <router-view/>
    <footer>
      <span>&copy; Copyright: Ихбаяр, Амартайван, Цэлмүүнзаяа <br> 2019 он</span>
    </footer>
  </div>
</template>

<script>
// import Headr from './components/header'
window.onload = function () {
  // location.reload()
}
export default {
  name: 'App',
  components: {
    // Headr
  },
  data: () => ({
    //
  })
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  #app{
    background: url("./assets/bg/alkhan_khee.jpg");
    font-family: 'Open Sans', 'Poppins', sans-serif;
  }
  footer{
    height: 85px;
    font-family: 'Open Sans', 'Poppins', sans-serif;
    background-color: rgb(4, 57, 150);
    background-size: cover;
    text-align: center;
    color:white;
    background-repeat: no-repeat;
    font-size: 13px;
    padding-top: 20px;
    margin-top: 30px;
    top:100vh;
  }
</style>
