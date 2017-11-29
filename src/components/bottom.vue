<template>
	<div>
		<ul class="bottom">
			<li>
				<router-link to="/"><i class="fa fa-home fa-lg"></i>首页</router-link>
			</li>
			<li>
				<router-link to="/notes"><i class="fa fa-pencil fa-lg"></i>笔记</router-link>
			<li>
				<router-link to="/article"><i class="fa fa-file-text-o fa-lg"></i>文章</router-link>
			<li>
				<router-link to="/after"><i class="fa fa-eye fa-lg"></i>读后感</router-link>
			<li>
				<router-link to="/my"><i class="fa fa-user fa-lg"></i>我的</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
			}
		},
		mounted:function(){
			
		}
	}
</script>
<style scoped>
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
	    overflow:hidden;
	    width: 100%;
	    box-shadow: 1px 5px 15px rgba(50, 50, 50, 0.3);
    	border-top: 1px solid #f6f6f9;
    	background: rgba(254, 253, 252, 1)
	}
	.bottom li{
		float: left;
		width: 20%;
		text-align: center;
		padding: 4px 0;
	}
	.bottom li i{
		width: 100%;
		margin-bottom: 5px;
	}
	a{
		color: #888;
	}
	/*激活状态*/
	.router-link-exact-active{
		color: #2196f3
	}
</style>