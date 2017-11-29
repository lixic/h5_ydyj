<template>
  <div id="app">
	<top></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top.vue'
import bottom from './components/bottom.vue'

export default {
  name: 'app',
  components:{
	"bottom":bottom,
	"top":top
  }
}
</script>

<style>
@import './assets/reset.css';
#app{
  background: #f6f6f9;
  padding: 48px 0 42px;
}
</style>
