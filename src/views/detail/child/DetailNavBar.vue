<template>
  <nav-bar>
      <template #left>
          <div class="leftbox" @click="backClick">
              <img src="~/assets/images/common/back.svg" alt="">
          </div>
      </template>
      <template #center> 
         <div  class="title">
              <div class="titleitem" v-for="(item,index) in titles" 
              :key="item"
               @click="itemClick(index)" 
               :class="{active:currentIndex===index}"
               >
              {{item}}
          </div>
         </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
components:{
    NavBar

},
data(){
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
        isActive:false
    }
},
methods:{
    itemClick(index){
        this.currentIndex =  index
},
backClick(){
    this.$router.back()
}
}
}
</script>

<style scoped>
.leftbox {
        box-sizing: border-box;
    padding-top: 5px;
    height: 44px;
    text-align: center;
    line-height: 44px;
}
.title {
    display: flex;
}
.titleitem {
    font-size: 13px;
    flex: 1;
}
.active {
    color: deeppink;
}


</style>