const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 维修人员评价列表
// http://localhost:3000/api/repair/list
router.get('/api/repair/list', (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
  // 总页数
  const totalPage = Math.ceil(totalItem / pageSize)
  const staff_id = ctx.query.staff_id

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
