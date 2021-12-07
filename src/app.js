const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const error = require('koa-json-error')

const router = require('./router/index.js')

app.use(koaBody())

app.use(router())

// 返回错误信息
app.use(
  error({
    format(error) {
      // 返回错误信息格式（生产环境不要这么用）
      return {
        status: error.status,
        message: error.message,
        result: error.stack,
      }
    },
  })
)

app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000')
})
