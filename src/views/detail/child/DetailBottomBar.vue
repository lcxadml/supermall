<template>
 <div class="flex bot-bar-wrap">
		<div class="bot-bar-item">
			<p class="p1"></p>
			<p>客服</p>
		</div>
		<div class="bot-bar-item">
			<p class="p2"></p>
			<p>店铺</p>
		</div>
		<div class="bot-bar-item">
			<p class="p3"></p>
			<p>收藏</p>
		</div>
		<div class="btn cart-btn" @click="addCart">加入购购物车</div>
		<div class="btn buy-btn">购买</div>
	</div>
</template>

<script>
export default {
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="less" scoped>
.bot-bar-wrap {
		height: 49px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		.bot-bar-item {
			width: 16%;
			font-size: 12px;
			color: #333;
			text-align: center;
			.p1,.p2,.p3 {
        margin-top: 5px;
				width: 27px;
				height: 27px;
        margin-left: 15px;
        background: url("~assets/images/detail/detail_bottom.png");
        background-size: 27px 190px;
				vertical-align: middle;
			}
     
      .p2{
        background-position-y: -68px;
      }
      .p1{
        background-position-y: -125px;
      }
		}
		.btn {
			width: 26%;
			font-size: 13px;
			line-height: 49px;
			text-align: center;
		}
		.cart-btn {
			background-color: #F9CD0B;
			line-height: 49px;
		}
		.buy-btn {
			color: #fff;
			background-color: var(--color-high-text);
		}
	}
</style>