const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 汽车商品列表
// http://localhost:3000/api/cargoods/list
router.get('/api/cargoods/list', (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
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
        cargoods_id: (page - 1) * 10 + i,
        price: Random.integer(10, 80) + '0000.00',
        name: (page - 1) * 10 + i + '. ' + Random.cparagraph(1, 3),
        image: Random.image('210x160', Random.color()),
      })
    }
  }

  const data = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total_page_count: totalPage,
      total_item_count: totalItem,
      start_item_index: (page - 1) * 10,
      end_item_index: (page - 1) * 10 + 9,
      page_size: pageSize,
      current_page_index: page,
      list,
    },
  })
  ctx.body = data
})

module.exports = router.routes()
