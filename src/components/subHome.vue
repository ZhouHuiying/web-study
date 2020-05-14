<template>
  <div>
    <Header />
    <div class="content1"> 
          <router-view></router-view>  
    </div>
  </div>
</template>

<script>

import Header from './header'


export default {
    components: {
        Header,
    },
    created() {
     
    },
    data() {
      return {

      }
    }
}
</script>

<style>
.content1{
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0px;
    overflow:scroll;
    background-color: #f2f2f2;
}
</style>