import {
    ADD_COUNTER,
    ADD_TO_CART
   } from './mutation-types'

export default {
    addCart(context,payload){
        console.log("aaaa");
      let oldProduct = null;
      // payload新添加的商品
      for(let item of context.state.cartList){
        if(item.iid === payload.iid){
          oldProduct =item;
        }
      }
      // 判断oldProduct 是否有值
      if(oldProduct !==null){
        // oldProduct.count++
        context.commit(ADD_COUNTER,oldProduct)
      }else{
        payload.count = 1;
       
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
  
      }
    }
   }