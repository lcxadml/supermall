<template>
 <div id="app">

 <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
   <main-tab-bar></main-tab-bar>
 
 </div>
</template>
<script>
import MainTabBar from './components/content/MainTabBar'
export default {
  name: 'App',
  components: {
MainTabBar,
  }
}
</script>

<style lang="less">
 @import "assets/css/base.css";
</style>
