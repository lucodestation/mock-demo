const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 预约时间段
// http://localhost:3000/api/repairorder/get_timeslot
router.get('/api/repairorder/get_timeslot', (ctx, next) => {
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
        yuyue_config_id: (page - 1) * 10 + i, //预约时间段配置ID
        tiemslot: '10:00 - 11:00', //时间段
        number: Random.integer(0, 5), //剩余名额
        status: Random.boolean() ? 'hidden' : 'normal', //状态 hidden不可用 normal可用
      })
    }
  }

  const data = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total_page_count: totalPage, // 总页数
      total_item_count: totalItem, // 总数据条数
      start_item_index: (page - 1) * 10, // 起始条数
      end_item_index: (page - 1) * 10 + 9, // 结束条数
      page_size: pageSize, // 每页条数
      current_page_index: page, // 当前页
      list,
    },
  })
  ctx.body = data
})

module.exports = router.routes()
