<template>
  <div id="app">
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from './components/bottom.vue'

export default {
  name: 'app',
  components:{
	"bottom":bottom
  }
}
</script>

<style>
@import './assets/reset.css';
#app{
  background: #f6f6f9;
}
</style>
