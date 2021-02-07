<template>
  <div class="goodlistitem">
      <div>
          <a :href="goodsItem.link">
              <img :src="goodsItem.show.img" alt="">
          <div class="box">
              <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.orgPrice}}</span>&nbsp;&nbsp;
          <span class="collect">{{goodsItem.cfav}}</span>
          </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
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