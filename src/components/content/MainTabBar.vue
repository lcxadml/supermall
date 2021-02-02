<template>
   <tab-bar>
<tab-bar-item path="/home" activeColor="red">
  <template #item-icon>
    <img src="../../assets/images/tabbar/home.svg" alt="">
  </template>
 <template #item-icon-active>
    <img src="../../assets/images/tabbar/home_active.svg" alt="">
 </template>
      <template #item-text>
         <div >首页</div>
      </template>
</tab-bar-item>
<tab-bar-item path="/category" activeColor="red">
 
  
<template #item-icon>
   <img src="../../assets/images/tabbar/category.svg" alt="">
  </template>
 <template #item-icon-active>
  <img src="../../assets/images/tabbar/category_active.svg" alt="">
 </template>
 <template #item-text>
         <div >分类</div>
      </template>
   
</tab-bar-item>
<tab-bar-item path="/shopcart" activeColor="red">

<template #item-icon>
 <img slot="item-icon" src="../../assets/images/tabbar/shopcart.svg" alt="">
  </template>
 <template #item-icon-active>
<img src="../../assets/images/tabbar/shopcart_active.svg" alt="">
 </template>
 <template #item-text>
         <div >购物车</div>
      </template>
</tab-bar-item>
<tab-bar-item path="/profile" activeColor="red">

 

  
       
<template #item-icon>
  <img slot="item-icon" src="../../assets/images/tabbar/profile.svg" alt="">
  </template>
 <template #item-icon-active>
 <img slot="item-icon-active" src="../../assets/images/tabbar/profile_active.svg" alt="">
 </template>
 <template #item-text>
         <div >我的</div>
      </template>
</tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
    components:{
         TabBar,
    TabBarItem
    }
}
</script>

<style>
@import "../../assets/css/base.css";
</style>