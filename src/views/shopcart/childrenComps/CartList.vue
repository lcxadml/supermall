<template>
  <div class="cart-list">
  <scroll class="contents">
          <cart-list-item v-for="(item,index) in cartList" :key="index" :cartList='item' @cartListClick="cartListClick"></cart-list-item>
          

  </scroll>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from "components/common/scroll/Scroll"
import CartListItem from './CartListItem'
export default {
    data(){
        return {
            cartListChecked:true
        }
    },
    methods:{
        cartListClick(){
        
      this.$emit("cartListClick")
        }
    },
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters([
        'cartList'
    ])
    }
}
</script>

<style>
.contents {
    height:100%;
    overflow: hidden;
}
.cart-list {
    height:  calc(100% - (44px + 49px +40px + 40px));
}
</style>