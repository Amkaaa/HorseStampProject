<template>
  <div id="app">
    <!-- <Headr/> -->
    <router-view/>
    <footer>
      <span>&copy; Copyright: Ихбаяр, Амартүвшин, Цэлмүүнзаяа <br> 2019 он</span>
    </footer>
  </div>
</template>

<script>
// import Headr from './components/header'
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
  footer{
    background: rgba(58, 58, 209, 0.568);
    background: url("https://kevlynpumps.com/wp-content/uploads/2018/06/Footer_wave.jpg");
    background-size: cover;
    text-align: center;
    color:black;
    background-repeat: no-repeat;
    height: auto;
    padding-top:7px;
    margin-top: 30px;
  }
</style>
