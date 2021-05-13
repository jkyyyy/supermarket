import Mock from 'mockjs'

const data = Mock.mock('http://123.207.32.32:8000/home/data\?type=pop&page=1', 'get', {
  "goods": {
    "pop":{
      "page": 0,
      "list": [{
        "price":"@integer(0, 100).@integer(0, 99)",
        "title": "@string('lower', 5)",
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
      },
      {
        "price":"@integer(0, 100).@integer(0, 99)",
        "title": "@string('lower', 5)",
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
      },
      {
        "price":"@integer(0, 100).@integer(0, 99)",
        "title": "@string('lower', 5)",
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
      }
    ],
    },
    "new":{
      "page": 0,
      "list|3": [{
        "price":"@integer(0, 100).@integer(0, 99)",
        "title": "@string('lower', 5)",
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
      }],
    },
    "sell":{
      "page": 0,
      "list|3": [{
        "price":"@integer(0, 100).@integer(0, 99)",
        "title": "@string('lower', 5)",
        "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
      }],
    },
  }
})

// const data = Mock.mock('http://123.207.32.32:8000/goodstest', 'get',{
//   // "goodstest|3": {
//   //   "地址": '@city(true)',
//   //   "img": "@dataImage()"
//   // }
//   "goodstest": {
//     "pop":{
//       "page": 1,
//       "list|3": [{
//         "price":"@integer(0, 100).@integer(0, 99)",
//         "title": "@string('lower', 5)",
//         "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
//       }],
//       // "list": [
//       //   {
//       //     "price":'@integer(0, 100).@integer(0, 99)',
//       //     "title": "ddd",
//       //     "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
//       //   },
//       //   {
//       //     "price":'@integer(0, 100).@integer(0, 99)',
//       //     "title": "ddd",
//       //     "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
//       //   },
//       //   {
//       //     "price":'@integer(0, 100).@integer(0, 99)',
//       //     "title": "ddd",
//       //     "image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
//       //   }
//       // ]
//     },
//     "new":{
//       "page": 1,
//       "list": []
//     },
//     "sell":{
//       "page": 1,
//       "list": []
//     },

//   }
// })

// console.log(JSON.stringify(data.data.banner.list))