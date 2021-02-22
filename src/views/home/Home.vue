<template>
 <div id="home">
   
  <nav-bar  class="home-nav">
    <template #center>
      购物街
    </template>
    
  </nav-bar>
<tab-bar-control :titles="['流行','新款','精选']"
 @tabClick="tabClick"
 ref="tabControl1"
 class="tab-control"
   v-show="isTabFixed"
></tab-bar-control>
 <scroll class="aaa" ref="scroll"
  :probe-type="3"
   @scroll="contentScroll"
  :pullUpLoad = "true"
  @pullingUp = "pullingUp"
 >
   
         <home-swiper :banners="banners" @swiperImageLoad= "swiperImageLoad"></home-swiper>
<recommond-view :recommend="recommend"></recommond-view>
<feature-view></feature-view>
<tab-bar-control :titles="['流行','新款','精选']"
 @tabClick="tabClick"
 ref="tabControl"
></tab-bar-control>
<goods-list :goods="showItem"></goods-list>
<a class="hidden">&nbsp;</a>
 </scroll>
 <!-- .native监听组件事件 -->
<back-top @click.native="backClick"  v-show="showBack"></back-top>

 </div>
 
 
</template>

<script>
import HomeSwiper from "./childcomponents/HomeSwiper"
import RecommondView from "./childcomponents/RecommondView"
import FeatureView from './childcomponents/FeatureView'


import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabBarControl from "components/content/tabbarControl/TabBarControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backTop/BackTop"

import bus from 'common/mitt'
import {itemListenerMixin} from "common/mixin"

import {getHomeMultidata,getGoods} from "network/home.js"
export default {
  name:"Home",
components:{
NavBar,
HomeSwiper,
RecommondView,
FeatureView,
TabBarControl,
GoodsList,
Scroll,
BackTop
// GoodsListItem

},

computed:{
  showItem(){
    return this.goods[this.goodslist[this.currentIndex]].list
  }
},
data(){
return {
  scroll:null,
banners:[],
recommend:[],
currentIndex:0,
goodslist:['pop','new','sell'],
goods:{
  'pop':{page:0,list:[]},
  'new':{page:0,list:[]},
  'sell':{page:0,list:[]}
},
showBack:false,
tabOffsetTop:0,
isTabFixed:false,

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

// mounted(){
// // 3 获取topControl的offsetTop
// // 所有组件中都有一个$el:属性，用于获取组件中的元素
// // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop



// let refresh = debounce(this.$refs.scroll.refresh,500)
// // 保存监听事件的函数
// this.itemImgListener = ()=>{
//   refresh()
// }
//   //  监听图片加载完成
// bus.$on('itemImageLoad',this.itemImgListener)
// },
mixins:[itemListenerMixin],
unmounted(){
// 取消全局事件的监听
bus.$off('itemImageLoad',this.itemImgListener)

},
deactivated(){
  console.log("deactivated");
},
methods:{
  pullingUp(){
    // this,getGoods(this.goodslist[this.currentIndex]);
    this.getGoods(this.goodslist[this.currentIndex]);
    this.$refs.scroll && this.$refs.scroll.finishPullUp()
  },
//   imageLoad(){
//     return function(){
// this.$refs.scroll && ;
// this.getGoods(this.goodslist[this.currentIndex]);
//     }
//   },
  // 防抖
  
  /*
   * 隐藏和显示回到顶部标签
  */
  contentScroll(posstion){
    // 判断Backtop是否显示
this.showBack = -posstion.y>1000
// 2决定tabcontrol是否吸顶（position）
this.isTabFixed =  (-posstion.y)>this.tabOffsetTop
  },
  /*
   * 上拉加载更多
  */
// LoadMore(){
//   console.log("上拉加载更多啊啊");
//   this.getGoods(this.goodslist[this.currentIndex]);
//   this.$refs.scroll.scroll.refresh()
// },
  /*
   * 事件监听相关的方法
  */
 swiperImageLoad(){
  this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
 },
 tabClick(index){
  this.currentIndex = index;
     this.$refs.tabControl1.currentIndex = index
  this.$refs.tabControl.currentIndex =index

 },
 /*
   * 调用回到顶部方法
  */
 backClick(){
   console.log("backclick");
 this.$refs.scroll.scrollTo(0,0,500);
 },

  /*
   * 网络请求相关的方法
  */
  getHomeMultidata(){
getHomeMultidata().then(res=>{
   this.banners = res.data.banner.list
   this.recommend = res.data.recommend.list
   
 })
  },
  getGoods(type){
    const page = this.goods[type].page+1
getGoods(type,page).then(res=>{
    // console.log(res.data.list);
    this.goods[type].list.push(...res.data.list);
    this.goods[type].page+=1;
    // this.$refs.scroll.finishPullUp();
 })
  }
}
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
 
}
.home-nav {
  z-index: 99;
  background-color: var(--color-text);
  color: #fff;
  /* position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0; */
}
/* .TabBarControl {
    position: -webkit-sticky;
    position: sticky;
   top: 44px;
} */
/* .aaa {
  margin-top: 44px;
 height: calc(100vh - 93px);
  overflow: hidden;
} */
.aaa {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  
}
.hidden {
  font-size: 0.1px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>