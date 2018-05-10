<template>
  <div @click="openFinder">
    <label class="hidden-file-input" tabindex="-1" style="">upload
      <input ref="file" @change="fileChange" type="file" accept="image/jpg,image/jpeg,image/png, image/gif">
    </label>
    <slot>
    </slot>
  </div>  
</template>

<script>
  export default {
    ready () {
    },
    props: {
      
    },
    methods: {
      openFinder () {
        this.$refs.file.click();
      },
      fileChange (e) {
        var files = e.target.files || e.dataTransfer.files;
        if (files && files.length > 0) {
          this.$emit('on-file-change',files[0])
        }
      }
    },
    data () {
      return {
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .hidden-file-input{
    visibility: hidden; 
    position: absolute; 
    overflow: hidden; 
    width: 0px; 
    height: 0px; 
    border: none; 
    margin: 0px; 
    padding: 0px;
  }
</style>