<template>
	<div>
		这是首页
		<search></search>
		<booklist></booklist>
		<booklist></booklist>
		<booklist></booklist>
		<booklist></booklist>
		<bottom></bottom>
	</div>
</template>
<script>
	import search from '../components/search.vue'
	import booklist from '../components/booklist.vue'
	import bottom from '../components/bottom.vue'

	export default{
		components:{
			"bottom":bottom,
			"search":search,
			"booklist":booklist
		}
	}
</script>