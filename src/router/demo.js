const Router = require('@koa/router')
const router = new Router()

router.get('/foo', (ctx, next) => {
  ctx.body = 'ok'
})

module.exports = router
