<template>
	<div>
		<h1>某某专题</h1>
		<div class="wrap">
			<ul class="list-wrap">
				<li><img src="" alt=""></li>
				<li><img src="" alt=""></li>
				<li><img src="" alt=""></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.wrap{
		width: 100%;
	}
	ul{
		overflow-x: scroll;
		margin-left: 10px;
		white-space: nowrap;
	}
	ul li{
		float: left;
		background: red;
		width: 100px;
		height: 130px;
		margin-right: 10px;

	}
</style>