const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 配件商品列表
router.get('/api/parts/glist', (ctx, next) => {
  const page = ctx.query.page * 1 || 1
  const page_size = ctx.query.page_size * 1 || 10

  console.table({
    page,
    page_size,
  })

  let length
  switch (page) {
    case 1:
    case 2:
      length = 10
      break
    case 3:
      length = 8
      break
  }

  const list = []
  for (let i = 0; i < length; i++) {
    list.push({
      partsgoods_id: (page - 1) * 10 + i,
      price: Random.integer(10, 2000) + '.00',
      name: Random.cparagraph(1, 3),
      image: Random.image('210x160', Random.color()),
    })
  }

  const data = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total_page_count: 3,
      total_item_count: 28,
      start_item_index: (page - 1) * 10,
      end_item_index: page + 10,
      page_size,
      current_page_index: page,
      partscate_id: 1,
      list,
    },
  })
  ctx.body = data
})

module.exports = router.routes()
