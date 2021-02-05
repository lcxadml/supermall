<template>
 <div id="home">
   
  <nav-bar  class="home-nav">
    <template #center>
      购物街
    </template>
  </nav-bar>
 <home-swiper :banners="banners"></home-swiper>
<recommond-view :recommends="recommend"></recommond-view>
<feature-view></feature-view>
<tab-bar-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-bar-control>
<goods-list :goods="showItem"></goods-list>
  

 </div>
 
</template>

<script>
import HomeSwiper from "./childcomponents/HomeSwiper"
import RecommondView from "./childcomponents/RecommondView"
import FeatureView from './childcomponents/FeatureView'

import NavBar from "components/common/navbar/NavBar"
import TabBarControl from "components/content/tabbarControl/TabBarControl"
import GoodsList from "components/content/goods/GoodsList"

import {getHomeMultidata,getGoods} from "network/home.js"
export default {
components:{
NavBar,
HomeSwiper,
RecommondView,
FeatureView,
TabBarControl,
GoodsList
// GoodsListItem

},
computed:{
  showItem(){
    return this.goods[this.goodslist[this.currentIndex]].list
  }
},
data(){
return {
banners:[],
recommend:[],
currentIndex:0,
goodslist:['pop','new','sell'],
goods:{
  'pop':{page:0,list:[]},
  'new':{page:0,list:[]},
  'sell':{page:0,list:[]}
}
}
},
created(){
  //  1请求多个数据
 this.getHomeMultidata(),

//  请求商品数据
 this.getGoods('pop');
 this.getGoods('new');
 this.getGoods('sell');
},
methods:{
  /*
   * 事件监听相关的方法
  */
 tabClick(index){
  this.currentIndex = index;

 },

  /*
   * 网络请求相关的方法
  */
  getHomeMultidata(){
getHomeMultidata().then(res=>{
   console.log(res);
   this.banners = res.data.banner.list
   this.recommend = res.data.recommend.list
   
 })
  },
  getGoods(type){
    const page = this.goods[type].page+1
getGoods(type,page).then(res=>{
    console.log(res.data.list);
    this.goods[type].list.push(...res.data.list)
 })
  }
}
}
</script>

<style >
#home {
  padding-top: 44px;
  height: 6000px;
}
.home-nav {
  background-color: var(--color-text);
  color: #fff;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
.TabBarControl {
    position: -webkit-sticky;
  position: sticky;
  top: 44px;
}
</style>