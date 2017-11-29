<template>
	<div>
		<ul>
			<li>
				<div class="top">
					<a href="">
						<img src="../assets/logo.png" alt="">
						<div>
							<span>这是用户名</span>
							<i>2010-10-10</i>
						</div>
					</a>
				</div>
				<div class="center">
					<a href="">
						<h3>这是文章标题，超出隐藏</h3>
						<p>
							这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏
						</p>
					</a>
				</div>
				<div class="bottom">
					<i>标签名字</i>
					<span>0评论 .</span>
					<span>0喜欢</span>
				</div>
			</li>
			<li>
				<div class="top">
					<a href="">
						<img src="../assets/logo.png" alt="">
						<div>
							<span>这是用户名</span>
							<i>2010-10-10</i>
						</div>
					</a>
				</div>
				<div class="center">
					<a href="">
						<h3>这是文章标题，超出隐藏</h3>
						<p>
							这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏
						</p>
					</a>
				</div>
				<div class="bottom">
					<i>标签名字</i>
					<span>0评论 .</span>
					<span>0喜欢</span>
				</div>
			</li>
			<li>
				<div class="top">
					<a href="">
						<img src="../assets/logo.png" alt="">
						<div>
							<span>这是用户名</span>
							<i>2010-10-10</i>
						</div>
					</a>
				</div>
				<div class="center">
					<a href="">
						<h3>这是文章标题，超出隐藏</h3>
						<p>
							这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏这是文章内容只能显示2行超出显示隐藏
						</p>
					</a>
				</div>
				<div class="bottom">
					<i>标签名字</i>
					<span>0评论 .</span>
					<span>0喜欢</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	ul{
		/*padding: 10px;*/
	}
	ul li{
	    width: 100%;
	    border-bottom: 1px solid #f0f0f0;
	    word-wrap: break-word;
	    padding: 20px 15px 25px;
	    box-sizing: border-box;
	}
	.top a{
		width: 100%;
		display: inline-block;
		overflow: hidden;
	}
	.top a>*{
		float: left;
	}
	.top img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}
	.top a div{
		overflow:hidden;
		margin-left: 5px;
	}
	.top a div>*{
		width: 100%;
		float: left;
	}
	.top a div span{
	    height: 17px;
	    line-height: 17px;
	    font-size: 15px;
	    color: #333;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.top a div i{
	    height: 12px;
	    line-height: 12px;
	    font-size: 12px;
	    color: #999;
	    margin-top: 5px;
	}
	.center h3{
	    margin: 10px 0 0;
	    font-size: 18px;
	    font-weight: 400;
	    line-height: 1.4;
	    color: #333;
	}
	.center p{
		text-indent: 2em;
	    font-size: 14px;
	    color: #999;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin: 7px 0 0;
	    line-height: 1.5;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.bottom{
	    margin-top: 12px;
	    text-align: right;
	    white-space: nowrap;
        font-size: 13px;
	    color: #999;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.bottom i{
	    position: relative;
	    float: left;
	    padding: 5px 8px;
	    margin-right: 10px;
	    font-size: 13px;
	    line-height: 1;
	    color: #ea6f5a;
        border: 1px solid #ea6f5a;
        border-radius: 6px;
	}
</style>