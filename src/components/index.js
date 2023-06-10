import Img from './Img/index.vue'
import Sku from './XtxSku/index.vue'
//全局组件在全局main文件下注册
export const componentPlugin = {
    install(app) {
        app.component('XtxImg', Img)
        app.component('XtxSku', Sku)
    }
}