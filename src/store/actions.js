import {
    ADD_COUNTER,
    ADD_TO_CART
   } from './mutation-types'

export default {
    addCart(context,payload){
       return new Promise((resolve,reject)=>{
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
          context.commit(ADD_COUNTER,oldProduct);
          resolve('当前数量加一')
        }else{
          payload.count = 1;
         
          // context.state.cartList.push(payload)
          context.commit(ADD_TO_CART,payload)
          resolve('添加了新的商品')
    
        }
       })
    }
   }