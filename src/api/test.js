import request from '@/utils/request'

export function getInfo() {
  return request({
    url: '/charts/test',
    method: 'get'
  })
}