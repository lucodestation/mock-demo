const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

router.get('/api/statement/wait', (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 总页数
  const totalPage = Math.ceil(totalItem / pageSize)

  console.log('总数据数', totalItem)
  console.log('当前页', page)
  console.log('每页条数', pageSize)
  console.log(`总页数 = Math.ceil(${totalItem} / ${pageSize})`, totalPage)

  // 要返回的数据数，默认为每页条数
  let length = pageSize
  // 如果是最后一页
  if (page === totalPage) {
    length = totalItem % pageSize
  }
  console.log('本次返回', length, '条数据')

  const list = []
  if (page <= totalPage) {
    for (let i = 0; i < length; i++) {
      list.push({
        id: (page - 1) * 10 + i,
        money: '3.78',
        time: '2022-01-05',
        createtime: '2022-01-08 09:22',
      })
    }
  }

  const data = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      last_page: totalPage, // 总页数
      total: totalItem, // 总数据条数
      per_page: pageSize, // 每页条数
      current_page: page, // 当前页
      data: list,
    },
  })
  ctx.body = data
})

module.exports = router.routes()
