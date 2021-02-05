<template>
  <div class="TabBarControl">
      <div v-for="(item,index) in titles" 
      :key="item" 
       :class="{active:currentIndex===index}"
       @click="itemClick(index)"
       >
          <span >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    },
    data(){
        return {
            currentIndex:0
        }
    }
}
</script>

<style>
.TabBarControl {
    box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
    background-color: #fff;
    display: flex;
    z-index: 99;
}
.TabBarControl div {
    text-align: center;
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.active {
    color: deeppink;
}
.active span {
    padding: 10px;
    border-bottom: 3px solid deeppink;

}
</style>