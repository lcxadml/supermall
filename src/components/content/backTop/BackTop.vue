<template>
  <div class="back-top" @click="backClick">
      <img src="~assets\images\common\top.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.back-top {
    position:fixed;
    bottom: 60px;
    right: 10px;
    z-index: 9999;
   width: 43px;height: 43px;
}
.back-top img {
    width: 100%;
    height: 100%;
}
</style>