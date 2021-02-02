<template>
 
     
     <div class="tab-bar-item" @click="itemClick">   
       <div v-if="!isactive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="styleActive"><slot name="item-text"></slot></div>
       </div>
      
  
</template>

<script>
export default {
name:"tabbaritem",
props:{
  path:String,
  activeColor:{
    type:String,
    deault:"red"
  }
},
data(){
  return {
    // isactive:false
  }
 
},
computed:{
  isactive(){
    return this.$route.path===this.path
  },
  styleActive(){
    return this.isactive?{color:this.activeColor}:{}
  }
},
 methods:{
    itemClick(){
        this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  background-color: #f6f6f6;
  font-size: 14px;

}
.tab-bar-item img {
    width: 24px;
    height: 24px;
vertical-align: middle;
margin-top: 3px;
}

</style>