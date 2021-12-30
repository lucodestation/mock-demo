const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random
const { util } = require('../utils/index.js')

// 配件商品列表
// http://localhost:3000/api/parts/glist
router.get('/api/parts/glist', (ctx, next) => {
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
        partsgoods_id: (page - 1) * 10 + i,
        price: Random.integer(10, 2000) + '.00',
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

// 配件订单列表
// http://localhost:3000/api/parts/olist
router.get('/api/parts/olist', async (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
  // 总页数
  const totalPage = Math.ceil(totalItem / pageSize)

  const status = ctx.query.status
  const statusList = [
    {
      label: '已取消',
      status: 'xxx',
    },
    {
      label: '待付款',
      status: 'nopay',
    },
    {
      label: '待发货',
      status: 'noship',
    },
    {
      label: '待收货',
      status: 'noreceive',
    },
    {
      label: '待评价',
      status: 'noappraise',
    },
    {
      label: '已完成',
      status: 'finished',
    },
  ]
  let statusIndex = statusList.findIndex(item => item.status === status)
  console.table({
    status,
    statusIndex,
  })

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
    if (statusIndex === -1) {
      for (let i = 0; i < length; i++) {
        const obj = {
          order_id: (page - 1) * 10 + i,
          order_sn: '202111011430519744324639',
          goods_name:
            (page - 1) * 10 +
            i +
            ' 配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1',
          goods_image: Random.image('105x80', Random.color()),
          spec_name: '规格',
          spec_value: '规格值2',
          price: '289.00',
          number: 1, //数量
          pay_price: '289.00',
          status: Random.integer(0, 5), //订单状态:0=已取消,1=待支付,2=待发货,3=待收货,4=待评价,5=已完成
          status_text: 'statusText',
        }
        obj.status_text = statusList[obj.status].label
        list.push(obj)
      }
    } else {
      for (let i = 0; i < length; i++) {
        const obj = {
          order_id: (page - 1) * 10 + i,
          order_sn: '202111011430519744324639',
          goods_name:
            (page - 1) * 10 +
            i +
            ' 配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1配件商品1',
          goods_image: Random.image('105x80', Random.color()),
          spec_name: '规格',
          spec_value: '规格值2',
          price: '289.00',
          number: 1, //数量
          pay_price: '289.00',
          status: statusIndex, //订单状态:0=已取消,1=待支付,2=待发货,3=待收货,4=待评价,5=已完成
          status_text: statusList[statusIndex].label,
        }
        list.push(obj)
      }
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

// 门店列表
// http://localhost:3000/api/store/index
router.get('/api/store/index', (ctx, next) => {
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
        store_id: (page - 1) * 10 + i, //门店ID
        name: (page - 1) * 10 + i + '. ' + '汽车4S店(电厂南路店)', //门店名称
        tel: '037156565235', //门店电话
        image:
          'http://4s.duowencaiwu.com/uploads/20211026/974059ff3c4eae1ccb8b8fb1626d5382.png', //图片
        city: '河南省/郑州市/中原区', //省市区
        addr: '电厂南路46号商铺2-1层33-34号', //详细地址
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
