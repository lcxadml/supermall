<template>
  <div class="toast"  v-show="show">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default(){
                return ""
            }
        },
        show:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
    data(){
        return {
            // message:"",
            // show:false,
            // showtime:1000
        }
    },
    methods:{
        // show(message,duration){
        //     this.show = true;
        //     this.message = message;

        //     setTimeout(()=>{
        //         this.show = false;
        //            this.message = "";
        //     },duration)
        // }
    }
}
</script>

<style>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.8);
    color: #fff;
    width: 200px;
    height: 35px;
    line-height: 35px;
    border-radius: 7px;
    text-align: center;
    transform: translate(-50%,-50%);
    letter-spacing: 2px;
}
</style>