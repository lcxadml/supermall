<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  <detail-swiper :topImages="topImage"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./child/DetailNavBar"
import {getDetail} from "network/detail"
import DetailSwiper from "./child/DetailSwiper"
export default {
  
    name:"detail",
      data(){
        return {
            iid:null,
            topImage:null
        }
    },
      created(){
        // 1保存传入的iid
        this.iid = this.$route.params.iid
        console.log(this.iid);
      
        getDetail(this.iid).then(res=>{
          console.log(res);
          this.topImage = res.result.itemInfo.topImages
          console.log(res.result.itemInfo.topImages);

})
    },
    
    components:{
      DetailNavBar,
      DetailSwiper
    }
    
}
</script>

<style scoped>

</style>