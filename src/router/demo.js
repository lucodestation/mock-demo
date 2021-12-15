const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random
// mock 示例 http://mockjs.com/examples.html

router.get('/foo', (ctx, next) => {
  ctx.body = {
    date: Random.now(),
    message: 'ok',
  }
})

router.get('/foo/list', (ctx, next) => {
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
        id: (page - 1) * 10 + i,
        boolean: Random.boolean(), // 随机布尔值
        int: Random.integer(), // 随机整数
        now: Random.now(), // 当前时间，格式 2021-12-15 10:29:49
        randomDateTime: Random.datetime(), // 随机时间，格式 2017-08-04 05:03:53
        randomDate: Random.date('yyyy-MM-dd'), // 随机日期
        randomTime: Random.time('HH:mm:ss'), // 随机时间
        randomImage: Random.image('200x100', '#080'), // 随机图片
        randomColor: Random.color(), // 随机颜色
        randomName: Random.cname(), // 随机中文名字
        randomTitle: Random.ctitle(), // 随机中文标题
        randomCword: Random.cword(2, 5), // 随机中文关键词
        randomCsentence: Random.csentence(), // 随机中文句子，一句，带句号，可指定中文个数
        randomCparagraph: Random.cparagraph(), // 随机段落，可指定句数
        city: Random.county(true), // 随机省市区（可能有海外、港澳台）
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

module.exports = router
