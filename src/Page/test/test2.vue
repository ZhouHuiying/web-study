<template>
  <div>
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
      Axios.get('http://localhost:3000').then(res => {
        console.log(res)
      });
      Axios.post('http://localhost:3000', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }

}
</script>

<style>

</style>