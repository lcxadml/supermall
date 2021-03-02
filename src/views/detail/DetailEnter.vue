<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav"></detail-nav-bar>
 <scroll class="content" ref="scroll" @scroll="contentScroll" probe-type=3>
    <detail-swiper :topImages="topImage"></detail-swiper>
  <detail-base-info :goods="goods"></detail-base-info>
  <detail-shop-info :shop="shop"></detail-shop-info>
  <detail-goods-info :detail-info="detailInfo" @imgLoad="imageLoad"></detail-goods-info>
  <detail-param-info :paramInfo="paramInfo" ref="paraminfo"></detail-param-info>
  <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
  <goods-list :goods="recommends" ref="recommend" class="goodlist"></goods-list>
 </scroll>
  <!-- .native监听组件事件 -->
<back-top @click.native="backClick"  v-show="showBack"></back-top>
 <detail-bottom-bar @addCart="addCart" class="detailbottom"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./child/DetailNavBar"
import {getDetail,Goods,Shop,Param,getRecommend} from "network/detail"
import DetailSwiper from "./child/DetailSwiper"
import DetailBaseInfo from "./child/DetailBaseInfo"
import DetailShopInfo from "./child/DetailShopInfo"
import DetailGoodsInfo from "./child/DetailGoodsInfo"
import DetailParamInfo from "./child/DetailParamInfo"
import DetailBottomBar from "./child/DetailBottomBar"
import Scroll from "components/common/scroll/Scroll"
import DetailCommentInfo from "./child/DetailCommentInfo"
import GoodsList from "components/content/goods/GoodsList"
import bus from 'common/mitt'
import {debounce} from 'common/util'
import {itemListenerMixin} from "common/mixin"
import BackTop from "components/content/backTop/BackTop"
export default {
  
    name:"detail",
      data(){
        return {
            iid:null,
            topImage:null,
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemTopY:null,
            currentIndex:null,
            showBack:false
        }
    },
    mixins:[itemListenerMixin],
      created(){
        // 1保存传入的iid
        this.iid = this.$route.params.iid
    
      // 根据iid请求详情数据
        getDetail(this.iid).then(res=>{
          const data = res.result
     
          this.topImage = data.itemInfo.topImages

// 2获取商品信息
this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

// 3创建店铺信息的对象
this.shop =  new Shop(data.shopInfo) 

// 4保存商品的详情数据
this.detailInfo = data.detailInfo;

// 5获取参数信息
this.paramInfo = new Param(data.itemParams.info,data.itemParams.rule)

// 6取出评论信息
if(data.rate.cRate !== 0){
  this.commentInfo = data.rate.list[0]
}
}),
// 请求推荐数据
getRecommend().then(res=>{

  this.recommends = res.data.list;
  console.log(this.recommends);
})
  this.getThemTopY = debounce(()=>{
      this.themeTopYs = []
         this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.paraminfo.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
  },1000)
    },
    mounted(){
   
    },
    updated(){
        
    },
    unmounted(){
      // 取消全局事件的监听
bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{
      addCart(){
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImage;
      product.title = this.goods.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goods.price;
      product.iid = this.iid ;
      product.realprice = this.realprice;

      // 将商品添加到购物车里
      // this.$store.commit('addCart',product);
      this.$store.dispatch('addCart',product);
      },
       /*
   * 调用回到顶部方法
  */
 backClick(){
        console.log("backclick");
      this.$refs.scroll.scrollTo(0,0,500);
      },
      imageLoad(){
        this.$refs.scroll.refresh()
      this.getThemTopY()
      },
      itemClick(index){
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.themeTopYs.length
        // positionY 和主题中的Y进行对比
        for(let i=0;i<length;i++){
          if(this.currentIndex!==i&&((i<length-1&&positionY<this.themeTopYs[i+1]&&positionY>this.themeTopYs[i]) || (i===length-1&&positionY>this.themeTopYs[i]))){
           this.currentIndex = i;
           this.$refs.nav.currentIndex = this.currentIndex
          }
        }
            // 3是否显示回到顶部
      this.showBack = positionY>1000
}
    },
    
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,  
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop
    }
    
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
 

}
.content {
 height: calc(600px - 44px);
}
.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.goodlist {
  height: 2000px;
}
.detailbottom {
  color: #fff;
}
</style>