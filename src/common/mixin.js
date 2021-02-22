import {debounce} from 'common/util'
import bus from 'common/mitt'

export const itemListenerMixin = {
    mounted(){
        let refresh = debounce(this.$refs.scroll.refresh,500)
        this.iamgeListener = ()=>{
        refresh()
      }
      bus.$on('itemImageLoad',this.iamgeListener)
    },
    data(){
        return {
            iamgeListener:null,
            itemImgListener:null
        }
    }
}