<template>
<!-- <vue-clip :options="options">
    <template slot="clip-uploader-action">
      <div class="uploader-action">
        <div class="dz-message">
          drop and drag file
        </div>
      </div>
    </template>
    <template slot="clip-uploader-body" scope="props">
      <div class="uploader-files">
        <div class="uploader-file" v-for="file in props.files" :key="file">
          <div class="file-avatar">
            <img v-bind:src="file.dataUrl" alt="file.data">
          </div>
          <div class="file-defaults">
            <div class="file-name">
              {{ file.name}}
            </div>
            <div class="file-progress">
              <span class="progress-indicator" v-bind:style="{width: file.progress+'%'}"></span>
            </div>
            <div class="file-meta">
              <span class="file-size">{{file.size}}</span>
              <span class="file-status">{{file.status}}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </vue-clip> -->
<div id="myDIV">
  <button class="btn">1</button>
  <button class="btn active">2</button>
  <button class="btn" onClick="window.location.reload()">3</button>
  <button class="btn">4</button>
  <button class="btn">5</button>
</div>
</template>

<script>
// Add active class to the current button (highlight it)
window.onload = function () {
  var header = document.getElementById('myDIV')
  var btns = header.getElementsByClassName('btn')
  console.log(btns)
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      console.log('bey')
      var current = document.getElementsByClassName('active')
      current[0].className = current[0].className.replace(' active', '')
      this.className += ' active'
    })
  }
}
</script>
<style>
/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.active, .btn:hover {
  background-color: #666;
  color: white;
}
</style>
