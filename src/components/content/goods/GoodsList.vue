<template>
  <div class="goods">
     <goods-list-item :goodsItem="item"  v-for="item in goods" :key="item"></goods-list-item>
  </div>

</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
    components:{
        GoodsListItem
    },
    props:{
       goods:{
            type:Array,
        default(){
            return []
       }
        }
    }
}
</script>

<style>
    

</style>