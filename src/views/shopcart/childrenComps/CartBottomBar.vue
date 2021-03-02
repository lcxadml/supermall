<template>
  <div class="cartBottomBar">
    <input type="checkbox" class="check" id="check" @click="allClick" v-model="isSelected">
    <label for="check">全选</label>
    <span>合计{{totalPrice}}</span>
    <div class="right" @click="calcClick">去计算({{tltalcaualate}})</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isChecked:false
        }
    },
computed:{
    cartList(){
        return this.$store.state.cartList;
    },
    totalPrice(){
        return "￥"+this.$store.state.cartList.filter(item => {
            return item.checked
        }).reduce((preValue,item) =>{
            return parseFloat(item.price.slice(1)) * parseFloat(item.count)+preValue
        },0).toFixed(2);
    },
    tltalcaualate(){
        return this.$store.getters.cartList.filter(item=>{
            return item.checked
        }).length
    },
    isSelected(){
        if(this.cartList.length===0)return false
        return !this.cartList.filter(item =>{
            return !item.checked
        }).length
    }
},
methods:{
    allClick(){
     if(this.isChecked){
          for(let i=0;i<this.$store.getters.cartList.length;i++){
        this.$store.getters.cartList[i].checked=false
      }
      this.isChecked = !this.isChecked
     }else{
          for(let i=0;i<this.$store.getters.cartList.length;i++){
        this.$store.getters.cartList[i].checked=true
      }
      this.isChecked = !this.isChecked
     }
    },
    calcClick(){

    }
}
}
</script>

<style lang="less" scoped="scoped">
  .cartBottomBar {
      position: absolute;
      left: 0;
      right: 0;
      height: 40px;
      line-height: 40px;
      bottom: 49px;
      background: #eee;
      label {
          display: inline-block;
          font-size: 14px;
          margin-left: 8px;
          height: 40px;
          line-height: 40px;
          vertical-align: top;
      }
      span {
            vertical-align: top;
          display: inline-block;
          margin-left: 20px;
           height: 40px;
          line-height: 40px;
          font-size: 14px;
      }
      .check {
			width: 20px;
			height: 20px;
			overflow: hidden;
			border-radius: 100%;
			border: 1px solid #ccc;
			margin-top: 8px;
            margin-left: 15px;
		}
		.check:checked {
			background: url(~assets/images/check_active.png) no-repeat center;
			background-size: cover;
		}
        .right {
            padding-left: 20px;
            float: right;
            width: 110px;
            height: 40px;
            background-color: #fc4200;
            color: #fff;
        }
  }
 
</style>