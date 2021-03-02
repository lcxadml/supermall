<template>
 <div class="cart">
    <nav-bar class="nav_bar">
<template #center>
      购物车({{cartLength}})
    </template>
  </nav-bar>
  <cart-list @cartListClick="cartListClick"></cart-list>
  <!-- 底部汇总 -->
  <cart-bottom-bar></cart-bottom-bar>
 </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childrenComps/CartList"
import CartBottomBar from './childrenComps/CartBottomBar'
import { mapGetters } from 'vuex'
export default {
  name:"Shopcart",
  data(){
    return {
      cartListChecked:false
    }
  },
 methods:{
cartListClick(){
         for(let i=0;i<this.$store.getters.cartList.length;i++){
            if(this.$store.getters.cartList[i].checked){
                this.cartListChecked = true;
            }else{
                this.cartListChecked = false;
            }
      }
}
 },
  components:{
    NavBar,
    CartList,
    CartBottomBar
   
  },
  computed:{
    ...mapGetters([
       'cartLength',
      'cartList'
    ])
  }
}
</script>

<style>
.nav_bar {
    background-color: var(--color-text);
    color: #fff;
    font-weight: 700;
}
.cart {
  height: 100vh;
}
</style>