<template>
	<div>
		<div class="top">
			<img src="../assets/logo.png" alt="">
			<span>这是用户名</span>
		</div>
		<ul class="count">
			<li>
				<span>0</span>
				篇笔记
			</li>
			<li>
				<span>0</span>
				篇喜欢
			</li>
			<li>
				<span>0</span>
				篇文章
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.top{
		margin-top: 15px;
	}
	.top>*{
		display: block;
	}
	.top img{
		width: 50px;
		border-radius: 50%;
		margin:10px auto;
		box-shadow: 0 0 5px #ccc
	}
	.top span{
		text-align: center;
		font-size: 16px;
		margin-bottom: 35px;
	}
	.count li{
		float: left;
		width: 33.33%;
		text-align: center;
		color: #888;
		font-size: 13px;
	}
	.count li span{
		display: block;
		color: #000;
		font-size: 18px;
		margin-bottom: 10px;
	}
</style>
