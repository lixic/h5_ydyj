<template>
	<div>
		<ul class="bottom">
			<li>
				<router-link to="/" class="active">首页</router-link>
			</li>
			<li>
				<router-link to="/note">笔记</router-link>
			<li>
				<router-link to="/article">文章</router-link>
			<li>
				<router-link to="/after">读后感</router-link>
			<li>
				<router-link to="/my">我的</router-link>
			</li>
		</ul>
	</div>
</template>
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
		padding: 10px 0;
	}
	a{
		color: #595959;
	}
	a.active{
		color: #2196f3
	}
</style>