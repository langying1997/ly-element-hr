// 获取新闻列表的接口
module.exports = [
  {
    url: '/news/getList',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: ['a', 'b', 'c']
      }
    }
  }
]
