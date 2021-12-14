const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random
// mock 示例

router.get('/foo', (ctx, next) => {
  ctx.body = {
    date: Random.now(),
    message: 'ok',
  }
})

module.exports = router
