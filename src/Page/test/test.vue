<template>
  <div style="margin:0 auto;width:100px;height:100px;margin-top:100px">
    <el-button @click="jump()">123</el-button>
  </div>
</template>

<script>
import Axios from 'axios'
export default { 
  data(){
    return {

    }
  },
  methods:{
    jump(){
      // Axios.get('http://localhost:3000').then(res => {
      //   console.log(res)
      // });

      // Axios.post('http://localhost:3000').then(res => {
      //   console.log(res)
      // });
      
      Axios.put('http://localhost:3000/user').then(res => {
        console.log(res)
      });

    }

  }

}
</script>

<style>

</style>