const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 维修人员评价列表
router.get('/api/repair/list', (ctx, next) => {
  const page = ctx.query.page * 1 || 1
  const page_size = ctx.query.page_size * 1 || 10
  const staff_id = ctx.query.staff_id

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
    const imageArr = [
      Random.image('185x105', Random.color()),
      Random.image('185x105', Random.color()),
      Random.image('185x105', Random.color()),
    ]
    list.push({
      user_id: staff_id,
      star: Random.integer(0, 5),
      content: Random.cparagraph(1, 3),
      createtime: Random.date('yyyy-MM-dd'),
      images: imageArr.filter(() => Random.boolean()),
      user: {
        id: staff_id,
        nickname: (page - 1) * 10 + i + '. ' + Random.cname(),
        avatar: Random.image('74x74', Random.color()),
        mobile: '15588889999',
      },
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
      end_item_index: (page - 1) * 10 + 9,
      page_size,
      current_page_index: page,
      list,
    },
  })
  ctx.body = data
})

module.exports = router.routes()
