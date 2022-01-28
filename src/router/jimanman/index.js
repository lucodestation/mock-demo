const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 我的地址
router.get('/api/jimanman/user/address', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 8
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        id: (current_page - 1) * 10 + i,
        names: (current_page - 1) * 10 + i + Random.cname(),
        mobile: '18300663562',
        province: '河南省',
        city: '郑州市',
        area: '中原区',
        address: '大学科技园',
        is_default: 0,
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

// 待核算账单
router.get('/api/jimanman/statement/wait', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 10
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        id: (current_page - 1) * 10 + i,
        money: (current_page - 1) * 10 + i + ' - 3.78',
        time: '2022-01-05',
        createtime: '2022-01-08 09:22',
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

// 待核算账单详情
router.get('/api/jimanman/statement/detail', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 10
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        pay_money: '3.78',
        add_time: '2021-12-22 15:37',
        goods_name: (current_page - 1) * 10 + i + '苹果--苹果13--13 6.1寸 韩版--黄金色 128G',
        number: 3,
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

// 未核算账单
router.get('/api/jimanman/statement/not', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 10
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        id: (current_page - 1) * 10 + i,
        pay_money: '-3.78',
        add_time: '2021-12-22 15:37:52',
        goods_name: (current_page - 1) * 10 + i + '苹果--苹果13--13 6.1寸 韩版--黄金色 128G',
        number: 3,
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

// 明细
router.get('/api/jimanman/statement/log', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 10
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        id: (current_page - 1) * 10 + i,
        money: '-3.78',
        memo: (current_page - 1) * 10 + i + '确认核算',
        createtime: '2022-01-08 11:50',
        type: 2,
        status: '已入账',
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

// 我的商品
router.get('/api/jimanman/shop/goods', ctx => {
  console.table(ctx.query)
  // 总数据数
  const total = 10
  // 每页条数
  const per_page = ctx.query.num * 1 || 8
  // 当前页
  const current_page = ctx.query.page * 1 || 1
  // 总页数
  const last_page = Math.ceil(total / per_page)

  console.table({
    总数据数: total,
    每页条数: per_page,
    当前页: current_page,
    总页数: Math.ceil(total / per_page) + ' = ' + last_page,
  })

  // 要返回的数据数，默认为每页条数
  let length = per_page
  // 如果是最后一页
  if (current_page !== 1 && current_page === last_page) {
    length = total % per_page
  }
  console.log('本次返回', length, '条数据')

  const data = []
  if (current_page <= last_page) {
    for (let i = 0; i < length; i++) {
      data.push({
        id: (current_page - 1) * 10 + i,
        price: '1.26',
        updatetime: '2021-12-20 10:29',
        is_top: 0,
        status: 'normal',
        goods_name: (current_page - 1) * 10 + i + '苹果--苹果13--13 6.1寸 韩版--黄金色 128G',
        tags: ['国行', '纯原装'],
      })
    }
  }

  const responseData = Mock.mock({
    code: 1,
    msg: '操作成功',
    time: new Date() * 1,
    data: {
      total: total, // 总条数
      per_page: per_page, // 一页显示的数量
      current_page: current_page, // 当前页
      last_page: last_page, // 总页数
      data,
    },
  })
  ctx.body = responseData
})

module.exports = router.routes()
