const Router = require('@koa/router')
const router = new Router()

router.get('/api/status/:status/:code', (ctx, next) => {
  console.log(ctx.params)
  const status = ctx.params.status * 1
  const code = ctx.params.code * 1
  if (status >= 200 && status < 300) {
    if (code === 1) {
      ctx.status = status
      ctx.body = {
        code: 0,
        msg: '操作成功',
        data: '数据',
      }
    } else {
      ctx.status = status
      ctx.body = {
        code: 0,
        msg: '错误信息',
        data: null,
      }
    }
  } else {
    ctx.status = status
    ctx.body = {
      code: 0,
      msg: '错误信息',
      data: null,
    }
  }
})

module.exports = router.routes()
