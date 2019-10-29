<template>
	<view class='cover-pages'>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.cover-pages{
	position: absolute;
	top: calc(50px + var(--status-bar-height));
	left: 0;
	right: 0;
	bottom: 0;
	background:$uni-bg-color-grey;
}

</style>
