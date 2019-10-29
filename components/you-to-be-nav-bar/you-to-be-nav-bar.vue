<template>
	<view class="you-to-be-nav-bar">
		<view class="you-to-be-nav-bar-left">
			<image src="/static/img/nav-bar/视频.png" mode="scaleToFill" class="you-to-be-nav-bar-left-img"></image>
			{{navTitle}}
		</view>
		<view class="you-to-be-nav-bar-right">
			<image src="/static/img/nav-bar/投影.png" mode="scaleToFill"></image>
			<image src="/static/img/nav-bar/录像.png" mode="scaleToFill"></image>
			<image src="/static/img/nav-bar/搜索.png" mode="scaleToFill"></image>
			<image src="/static/img/nav-bar/头像.png" mode="scaleToFill"></image>
		</view>
	</view>
</template>

<script>
export default{
	name:'you-to-be-nav-bar',
	data(){
		return {
			
		}
	},
	props:{
		navTitle:{
			type:String,
			default:'YouTube'
		}
	}
}
</script>

<style scoped lang="scss">
.you-to-be-nav-bar{
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	height: 50px;
	background: #fff;
	margin-top: var(--status-bar-height);
}
.you-to-be-nav-bar-left{
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 50%;
	padding-left: 15px;
}
image{
	width: 30px;
	height: 30px;
}
.you-to-be-nav-bar-left-img{
	padding-right:5px;
}
.you-to-be-nav-bar-right{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.you-to-be-nav-bar-right image{
	width: 25px;
	height: 25px;
	padding: 0 10px;
}
</style>
