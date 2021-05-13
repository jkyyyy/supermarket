import {request} from "./request"

// 将首页中所有的请求都放在一个文件中进行封装
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function gethomegoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type, page
    }
  })
}

export function getgoods() {
  return request({
    url: '/goodstest'
  })
}