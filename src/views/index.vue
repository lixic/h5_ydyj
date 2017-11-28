<template>
	<div>
		这是首页
		<search></search>
		<booklist></booklist>
		<booklist></booklist>
		<booklist></booklist>
		<booklist></booklist>
	</div>
</template>
<script>
	import search from '../components/search.vue'
	import booklist from '../components/booklist.vue'

	export default{
		components:{
			"search":search,
			"booklist":booklist
		}
	}
</script>