<template>
  <div>
    <Header />
    <Sidebar />
    <div class="content">
        <Tags />
        <keep-alive :include="tagsList">
          <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>

import Header from './header'
import Sidebar from './sidebar'
import Tags from './Tags'
import bus from './bus'

export default {
    components: {
        Header,
        Sidebar,
        Tags
    },
    created() {
      bus.$on('tags', msg => {
        this.tagsList.push(msg)
      }),
      bus.$on('tagsclear', () =>
      {
        this.tagsList = []
      })
    },
    data() {
      return {
        tagsList: []
      }
    }
}
</script>

<style>
.content{
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 230px;
    overflow:scroll;
    background-color: #f2f2f2;
}
</style>