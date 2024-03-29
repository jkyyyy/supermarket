import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/index.js'
import Mock from 'mockjs'

// Vue.config.productionTip = false
createApp().mount('#app1')

// 为app1添加中间件处理跨域请求
app1.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app1.use('', function(req, res) {
  res.json(Mock.mock({
    'banner':[
      {"acm":"3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
      "height":390,"height923":390,
      "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
      "image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
      "link":"https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
      "title":"\u7115\u65b0\u5973\u88c5\u8282",
      "width":750,"width923":750},
      {"acm":"3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        "height":390,"height923":390,
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        "image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
        "link":"https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        "title":"\u5165\u79cb\u7a7f\u642d\u6307\u5357",
        "width":750,"width923":750},
      {"acm":"3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "height":390,"height923":390,
          "image":"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
          "image923":"https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
          "link":"https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "title":"\u79cb\u5b63\u62a4\u80a4\u5927\u4f5c\u6218","width":750,"width923":750},
      {"acm":"3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        "height":390,"height923":390,
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
        "image923":"https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
        "link":"https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        "title":"\u6d41\u884c\u62a2\u5148\u4e00\u6b65","width":750,
        "width923":750}]
  }))
})
app1.listen('8090', () => {
  console.log('监听端口8090')
})
