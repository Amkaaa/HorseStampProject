<template>
  <div id="app">
    <headr/>
    <router-view/>
    <footer>
      <span>&copy; Copyright: Ихбаяр, Амартүвшин, Цэлмүүнзаяа</span>
    </footer>
  </div>
</template>

<script>
import headr from './components/header'
export default {
  name: 'App',
  components: {
    headr
  },
  data: () => ({
    //
  })
}
</script>
<style>
  footer{
    background: rgba(58, 58, 209, 0.568);
    text-align: center;
    color:white;
    height: 40px;
    padding-top:7px;
    margin-top: 30px;
  }
</style>
