const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 我的积分明细列表
// http://localhost:3000/api/score/index
router.get('/api/score/index', (ctx, next) => {
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
  for (let i = 0; i < length; i++) {
    list.push({
      flow_id: (page - 1) * 10 + i,
      score: 876,
      before: 30,
      after: 60,
      memo: (page - 1) * 10 + i + '. ' + Random.cparagraph(1),
      createtime: Random.date('yyyy-MM-dd HH:mm'),
    })
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
      score: 10000,
    },
  })
  ctx.body = data
})

// 我的邀请/我的团队列表
// http://localhost:3000/api/invite/list
router.get('/api/invite/list', (ctx, next) => {
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
  for (let i = 0; i < length; i++) {
    list.push({
      user_id: 2, //下级用户ID
      status: 'normal', //normal已激活 hidden未激活
      orderinfo: {
        //订单信息 否则为null
        goods_name: Random.cparagraph(1), //购买商品名称
        pay_price: '60.00', //支付金额
        score: 5, //返利积分
        status: 2,
        createtime: '2021-11-02 13:48', //下单时间
        status_text: '待发货',
      },
      user: {
        //下级用户信息
        id: 2,
        nickname: (page - 1) * 10 + i + '. ' + Random.cname(), //昵称
        avatar:
          'http://4s.duowencaiwu.com/uploads/20211214/5796f9c97e25bcfd6bee9e58dec3d581.png', //头像
      },
    })
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

// 我的车辆列表
// http://localhost:3000/api/mycar/list
router.get('/api/mycar/list', (ctx, next) => {
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
  for (let i = 0; i < length; i++) {
    list.push({
      mycar_id: (page - 1) * 10 + i, //车辆数据ID
      user_id: 3, //用户ID
      carbrand: '丰田', //车品牌
      carseries: '汉兰达', //车系
      carmodel: '汉兰达 2022款 双擎 2.5L 两驱精英版 5座', //车型
      carnumber: (page - 1) * 10 + i + '. ' + '豫B · 32664', //车牌号
      buydate: '2018-01-03', //购车日期
      mileage: '1.8万公里', //形式里程
    })
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

// 我的优惠券
// http://localhost:3000/api/coupon/mylist
// status	是	string	默认noused 状态:noused=未使用,used=已使用,overdue=已过期
router.get('/api/coupon/mylist', (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
  // 总页数
  const totalPage = Math.ceil(totalItem / pageSize)

  const status = ctx.query.status || 'noused'

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
  for (let i = 0; i < length; i++) {
    list.push({
      user_coupon_id: (page - 1) * 10 + i, //数据ID
      name: (page - 1) * 10 + i + '. ' + '满100减10', //优惠券名称
      man: '100.00', //满金额
      reduce: '10.00', //减金额
      code: '202110271525502694802729', //核销码
      starttime: '2021-07-22', //有效期(始)
      endtime: '2021-07-31', //有效期(终)
      status, //状态:noused=未使用,used=已使用,overdue=已过期
    })
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
