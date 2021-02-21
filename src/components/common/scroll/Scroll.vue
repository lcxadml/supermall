<template>
  <div class="wrapper" ref="aaa">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    // 被挂载了以后
    props:{
probeType:{
    type:Number,
    default:0
},
pullUpLoad:{
    type:Boolean,
    default:false
}
    },
    data(){
        return {
            scroll:null,
        }
    },
mounted(){

    // observeDOM:true, 监听dom元素大小因为窗口大小或其他原因而改变大小
    this.scroll = new BScroll(this.$refs.aaa,{
        mouseWheel:true,click:true,
        probeType:this.probeType,pullUpLoad:this.pullUpLoad,
        useTransition:false,
        observeDOM:true
    });
    // 监听滚动位置
    this.scroll.on("scroll",(posstion)=>{
        this.$emit("scroll",posstion)
    });
    // 监听滚动到底部
     if(this.pullUpLoad){
         this.scroll.on("pullingUp",()=>{
             console.log("监听到滚动到底部");
             this.$emit("pullingUp");
             
         })
     }
},
methods:{
    refresh(){
        console.log("11111111");
        this.scroll && this.scroll.refresh()
    },
    scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
        this.scroll.finishPullUp()
    }
   
}
}
</script>

<style scoped>
.wrapper {
     touch-action: none;
}

</style>

