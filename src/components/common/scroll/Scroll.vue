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
    data(){
        return {
            scroll:null,
        }
    },
mounted(){
    this.scroll = new BScroll(this.$refs.aaa,{
        mouseWheel:true,observeDOM:true,click:true
    });
},
methods:{
    scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
    }
}
}
</script>

<style scoped>
.wrapper {
     touch-action: none;
}

</style>

