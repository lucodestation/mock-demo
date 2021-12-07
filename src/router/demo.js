const Router = require('@koa/router')
const router = new Router({ prefix: '/api/demo' })

router.get('/foo', (ctx, next) => {
  ctx.body = 'ok'
})

module.exports = router.routes()
