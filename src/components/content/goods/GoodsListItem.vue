<template>
  <div class="goodlistitem" @click="itemClick">
      <div>

              <img :src="showImage" alt="" @load="imageLoad">
          <div class="box">
              <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.orgPrice}}</span>&nbsp;&nbsp;
          <span class="collect">{{goodsItem.cfav}}</span>
          </div>
      
      </div>
      
  </div>
</template>

<script>
import bus from 'common/mitt'
export default {
    methods:{
        imageLoad(){
  bus.$emit('itemImageLoad')

    //    if(this.$route.path.indexOf('/home')){
    //         bus.$emit('itemImageLoad')
    //    }else if(this.$route.path.indexOf('/detail')){
    //         bus.$emit('detailImageLoad')
    //    }
},
    itemClick(){
        this.$router.push("/detail"+this.goodsItem.iid)
    }
    },
  computed:{
      showImage(){
          return this.goodsItem.image || this.goodsItem.show.img
      }
  },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
  
}
</script>

<style>
* {
    box-sizing: border-box;
}
.goodlistitem {
    position: relative;
    height: 360px;
    text-align: center;
    padding: 5px;
    float: left;
        width: 50%;
        padding: 10px;
    }
    .goodlistitem:nth-child(2n+1) {
        padding-right: 0px;
    }
.goodlistitem img {
    width: 100%;
    border-radius: 8px;
}
p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price {
    color: red;
}
.collect::before {
    content: '';
    display: inline-block;
    vertical-align: top;
    width: 1rem;
    height: 1rem;
    background: url('~assets/images/common/collect.svg')no-repeat;
    background-size: 1rem 1rem;
}
.box {
    height: 45px;
    width: 100%;
    position: absolute;
    bottom: 0;
}  
</style>