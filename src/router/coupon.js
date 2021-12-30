const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 优惠券弹窗数据
// http://localhost:3000/api/coupon/generate_coupon
router.get('/api/coupon/generate_coupon', (ctx, next) => {
  const list = []
  for (let i = 0; i < 5; i++) {
    list.push({
      user_id: 1,
      code: '20211027152949', //核销码
      coupon_id: 1,
      name: '￥100', //优惠券名称
      man: '500.00', //满额
      reduce: '100.00', //减额
      starttime: '2021-10-27', //有效期开始时间
      endtime: '2021-10-30', //有效期结束时间
    })
  }

  const data = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: list,
  })
  ctx.body = data
})

module.exports = router.routes()
