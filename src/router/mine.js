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
  if (page <= totalPage) {
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
  if (page <= totalPage) {
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
  if (page <= totalPage) {
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
  if (page <= totalPage) {
    for (let i = 0; i < length; i++) {
      list.push({
        user_coupon_id: (page - 1) * 10 + i, //数据ID
        name: (page - 1) * 10 + i + '. ' + '满100减10', //优惠券名称
        man: '100.00', //满金额
        reduce: '10.00', //减金额
        // code: '202110271525502694802729', //核销码
        code: '20211027152550', //核销码
        starttime: '2021-07-22', //有效期(始)
        endtime: '2021-07-31', //有效期(终)
        status, //状态:noused=未使用,used=已使用,overdue=已过期
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

// 我的保障记录列表
// http://localhost:3000/api/ensure/list
router.get('/api/ensure/list', (ctx, next) => {
  // 总数据数
  const totalItem = 28
  // 当前页
  const page = ctx.query.page * 1 || 1
  // 每页条数
  const pageSize = ctx.query.page_size * 1 || 10
  // 总页数
  const totalPage = Math.ceil(totalItem / pageSize)

  let status = ctx.query.status * 1
  const statusList = ['未处理', '审核成功', '审核拒绝']

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
    if (status !== 0) {
      for (let i = 0; i < length; i++) {
        list.push({
          ensure_id: (page - 1) * 10 + i, //保障数据ID
          order_no: '202111081721197081637824', //订单编号
          cardno: '8496513263456456', //服务卡号
          staff_id: 0, //机修服务顾问ID
          carmodel: (page - 1) * 10 + i + '. ' + '汽车车型阿凡达', //车型
          carnumber: '豫A · 3M1VK', //车牌号
          buydate: '2019-12-01', //购车日期
          mileage: '1.5万公里', //行驶里程
          address: '河南省/郑州市/金水区', //事故地址
          addr: '天河路xxx6665', //详细地址
          happen_time: '2021-11-30', //事故发生日期
          images: [
            //事故图片
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
          ],
          reason: '', //拒绝原因
          status, //状态 1=未处理,2=审核成功,3=审核拒绝
          jstaff: null, ////机修服务顾问信息
          status_text: statusList[status - 1],
        })
      }
    } else {
      for (let i = 0; i < length; i++) {
        const obj = {
          ensure_id: (page - 1) * 10 + i, //保障数据ID
          order_no: '202111081721197081637824', //订单编号
          cardno: '8496513263456456', //服务卡号
          staff_id: 0, //机修服务顾问ID
          carmodel: (page - 1) * 10 + i + '. ' + '汽车车型阿凡达', //车型
          carnumber: '豫A · 3M1VK', //车牌号
          buydate: '2019-12-01', //购车日期
          mileage: '1.5万公里', //行驶里程
          address: '河南省/郑州市/金水区', //事故地址
          addr: '天河路xxx6665', //详细地址
          happen_time: '2021-11-30', //事故发生日期
          images: [
            //事故图片
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
            Random.image('80x80', Random.color()),
          ],
          reason: '', //拒绝原因
          status: Random.integer(1, 3), //状态 1=未处理,2=审核成功,3=审核拒绝
          jstaff: null, ////机修服务顾问信息
          status_text: '',
        }
        obj.status_text = statusList[obj.status - 1]
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

// 我的保障记录详情
// http://localhost:3000/api/ensure/detail
router.get('/api/ensure/detail', (ctx, next) => {
  const ensure_id = ctx.query.ensure_id

  // 未处理
  let data = {
    ensure_id: ensure_id, //保障数据ID
    order_no: '202111081721197081637824', //订单编号
    cardno: '8496513263456456', //服务卡号
    staff_id: 0, //机修服务顾问ID
    carmodel: '汽车车型阿凡达', //车型
    carnumber: '豫A · 3M1VK', //车牌号
    buydate: '2019-12-01', //购车日期
    mileage: '1.5万公里', //行驶里程
    address: '河南省/郑州市/金水区', //事故地址
    addr: '天河路xxx6665', //详细地址
    happen_time: '2021-11-30', //事故发生日期
    images: [
      //事故图片
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
    ],
    reason: '', //拒绝原因
    status: 1, //状态 1=未处理,2=审核成功,3=审核拒绝
    jstaff: null, ////机修服务顾问信息
    status_text: '未处理',
  }

  // 已成功
  data = {
    ensure_id: ensure_id, //保障数据ID
    order_no: '202111081721197081637824', //订单编号
    cardno: '8496513263456456', //服务卡号
    staff_id: 0, //机修服务顾问ID
    carmodel: '汽车车型阿凡达', //车型
    carnumber: '豫A · 3M1VK', //车牌号
    buydate: '2019-12-01', //购车日期
    mileage: '1.5万公里', //行驶里程
    address: '河南省/郑州市/金水区', //事故地址
    addr: '天河路xxx6665', //详细地址
    happen_time: '2021-11-30', //事故发生日期
    images: [
      //事故图片
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
      Random.image('80x80', Random.color()),
    ],
    reason: '', //拒绝原因
    status: 2, //状态 1=未处理,2=审核成功,3=审核拒绝
    jstaff: {
      avatar:
        'http://4s.duowencaiwu.com/uploads/20211026/f9c4610f09438c0c535fb69b107ff41f.png',
      id: 1,
      mobile: '15981881551',
      username: '李师师',
    }, ////机修服务顾问信息
    status_text: '审核成功',
  }

  // 已拒绝
  // data = {
  //   ensure_id: ensure_id, //保障数据ID
  //   order_no: '202111081721197081637824', //订单编号
  //   cardno: '8496513263456456', //服务卡号
  //   staff_id: 0, //机修服务顾问ID
  //   carmodel: '汽车车型阿凡达', //车型
  //   carnumber: '豫A · 3M1VK', //车牌号
  //   buydate: '2019-12-01', //购车日期
  //   mileage: '1.5万公里', //行驶里程
  //   address: '河南省/郑州市/金水区', //事故地址
  //   addr: '天河路xxx6665', //详细地址
  //   happen_time: '2021-11-30', //事故发生日期
  //   images: [
  //     //事故图片
  //     Random.image('80x80', Random.color()),
  //     Random.image('80x80', Random.color()),
  //     Random.image('80x80', Random.color()),
  //     Random.image('80x80', Random.color()),
  //     Random.image('80x80', Random.color()),
  //   ],
  //   reason: '这里是拒绝原因', //拒绝原因
  //   status: 3, //状态 1=未处理,2=审核成功,3=审核拒绝
  //   jstaff: null, ////机修服务顾问信息
  //   status_text: '审核成功',
  // }

  ctx.body = data
})

// 我的预约列表
// http://localhost:3000/api/yuyue/list
router.get('/api/yuyue/list', (ctx, next) => {
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
      const obj = {
        yuyue_id: (page - 1) * 10 + i, //预约数据ID
        order_no: '202111061519481940340830',
        yytype: Random.integer(1, 2), //预约类型 1试驾 2置换
        cargoods_id: '1', //汽车商品ID
        staff_id: 0, //员工ID
        yydate: null, //预约日期
        createtime: '2021-11-06', //提交日期
        status: 1, //状态 0已取消 1已预约 2已完成
        cargoods: {
          //商品信息
          id: 1,
          name:
            (page - 1) * 10 +
            i +
            '. ' +
            '21款坦克300防虫网专用前脸车头中网 水箱保护网魏派汽车改装配件中网防...', //名称
          image: Random.image('105x80', '#080'), //图片
        },
        staff: null, //员工信息
        status_text: '已预约', //状态文字说明
      }
      if (obj.yytype === 1) {
        obj.yydate = '2021-11-06'
        obj.staff = {
          id: 14,
          username: '石麦文',
        }
      }
      list.push(obj)
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

// 我的维修订单列表
// http://localhost:3000/api/repairorder/list
router.get('/api/repairorder/list', (ctx, next) => {
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
        repairorder_id: (page - 1) * 10 + i, //维修订单数据ID
        order_no: '202111101616498097642326', //订单编号
        order_type: 3, //订单类型:1=保养,2=机修,3=钣喷,4=保障转机修
        bptype: 1, //钣喷类型:0=无,1=钣金,2=喷漆 根据订单类型为3的情况下使用
        cargoods_name: (page - 1) * 10 + i + '. ' + '21款坦克300防虫网', //车款名称
        cargoods_image: Random.image('105x81', '#080'), //车款图片
        carmodel: '汽车长城233', //车型
        carnumber: '豫A · 3U2BC', //车牌号
        buydate: '2019-10-11', //购车日期
        cardno: '', //保障卡号
        createtime: '2021-11-10', //提交日期
        status: 1, //状态:0=已取消,1=已预约,2=进行中,3=待评价,4=已完成
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
