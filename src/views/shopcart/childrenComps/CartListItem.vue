<template>
 <div>
    
		<div class="cart-list-main flex" >
			<div class="cart-list-left flex">
				<input type="checkbox" class="check"  v-model="cartList.checked" @click="cartListClick">
				<img :src="cartList.image[0]" alt="" class="goods-img">
			</div>
			<div class="cart-list-right">
				<div class="goods-name one-txt-cut">{{cartList.title}}</div>
				<div class="goods-info flex">
					<span class="price">{{cartList.price}}</span><span>x{{cartList.count}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props:{
        cartList:{
            type:Object,
            default(){
                return {}
            }
        }
    },
	methods:{
		cartListClick(){
			this.$emit("cartListClick")
		}
	}
}
</script>
<style lang="less" scoped="scoped">
	.cart-list-main {
		padding: 10px;
		border-bottom: 1px solid #ececec;
	}
	.cart-list-left {
		width: 26%;
		align-cartLists: center;
		.check {
			width: 20px;
			height: 20px;
			overflow: hidden;
			border-radius: 100%;
			border: 1px solid #ececec;
			margin-top: 20px;
		}
		.check:checked {
			background: url(~assets/images/check_active.png) no-repeat center;
			background-size: cover;
		}
		.goods-img {
			width: 52px;
			height: 66px;
			overflow: hidden;
			border: 1px solid #ececec;
			margin:0 10px;
			border-radius: 6px;
			vertical-align: middle;
		}
	}
	.cart-list-right {
		width: 74%;
		position: relative;
		.goods-name {
			width: 100%;
			font-size: 13px;
		}
		.goods-info {
			justify-content: space-between;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			.price {
				color: #F9CD0B;
			}
		}
	}
</style>