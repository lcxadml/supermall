<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item-recommend">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
props:{
     recommends:{
         type:Array,
         defalut(){
             return []
         }
     }
}
}
</script>

<style>
.recommend {
    /* -webkit-tap-highlight-color:transparent;  */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    margin: 15px 0 30px;
    display: flex;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
}
.recommend>a {
    
    flex: 1;
}
.recommend a img {
    width: 80%;
}
.recommend a div {
    text-align: center;
}
</style>