<template>
  <div id="app">
    <!-- <Headr/> -->
    <router-view />
    <footer class="footer">
      <div class="footer_content">
        <div class="container">
          <div class="row">
            <!-- Footer Column -->
            <div class="col-lg-3 footer_col">
              <div class="footer_contact">
                <center>
                  <h2>Холбоо барих</h2>
                </center>
                <center>
                  <p>Утас: 976-xxxx-xxxx</p>
                </center>
                <center>
                  <p>И-мэйл: matbs@gmail.com</p>
                </center>
                <center>
                  <p>Вебсайт: http://www.matbs.org</p>
                </center>
              </div>
            </div>
            <!-- Footer Column -->
            <div class="col-lg-6 footer_col">
              <div class="footer_location">
                <center>
                  <h2>Байршил</h2>
                </center>
                <center>
                  <p>Монгол Адууны Тамга Бүртгэл</p>
                </center>
                <center>
                  <p>ХШУИС - 3-р байр, 227 тоот</p>
                </center>
                <center>
                  <p>Их сургуулийн гудамж, СБД</p>
                </center>
                <center>
                  <p>Монгол Улс</p>
                </center>
              </div>
            </div>
            <!-- Footer Column -->
            <div class="col-lg-3 footer_col">
              <div class="footer_social">
                <center>
                  <h2>Биднийг дагах</h2>
                </center>
                <center>
                  <ul class="footer_social_list">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </center>
              </div>
            </div>
          </div>
          <div
            class="copyright"
          >Copyright &copy;2019 All rights reserved | Монгол Адууны Тамга Бүртгэлийн систем | Амартайван, Ихбаяр, Цэлмүүнзаяа</div>
        </div>
      </div>
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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
#app {
  background: url("./assets/bg/alkhan_khee.jpg");
  font-family: "Open Sans", "Poppins", sans-serif;
}
.footer {
  margin-top: 20px;
  width: 100%;
  background: rgb(4, 57, 150);
}
.footer_content {
  padding-top: 40px;
  padding-bottom: 30px;
}
.footer h2 {
  font-size: 25px;
  color: white;
  font-weight: bold;
}
.footer p {
  font-size: 15px;
  color: white;
}
.footer_social_list i {
  font-size: 30px;
  transition: ease-in-out 5s;
}
.footer_social_list li a i:hover {
  color: white;
  opacity: 0.5;
}
.footer_about {
  width: 100%;
}
.footer_social_title {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: white;
  vertical-align: middle;
}
.footer_social_list {
  display: inline-block;
  vertical-align: middle;
}
.footer_social_list li {
  display: inline-block;
}
.footer_social_list li:not(:last-child) {
  margin-right: 30px;
}
.footer_social_list li a i {
  color: white;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.copyright {
  padding-top: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: white;
  margin-top: 7px;
}
</style>
