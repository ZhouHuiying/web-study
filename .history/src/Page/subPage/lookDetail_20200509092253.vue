<template>
  <div>
      <div class="head">客户名称：{{this.data}}</div>
  </div>
</template>

<script>
export default {
    created(){

    },
    methods: {
        getInfo(){
            this.data = JSON.parse(sessionStorage.getItem)
        }
    }
};
</script>

<style>
</style>