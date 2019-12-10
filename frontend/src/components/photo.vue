 <template>
 <vue-clip :options="options">
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
  </vue-clip>
