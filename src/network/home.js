import {request} from "./request"

// 将首页中所有的请求都放在一个文件中进行封装
export function getHomeMultidate() {
  return request({
    url: '/home/multidata'
  })
}