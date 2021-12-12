const Router = require('@koa/router')
const router = new Router()
const axios = require('axios')

const { WXBizDataCrypt } = require('../utils/index.js')

// Decrypt 解密

// 文档 https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
// https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

// code 换取 sessionKey
router.get('/api/auth/code2Session', async (ctx, next) => {
  // 测试号
  const appId = 'wxe12a71ce16b99e75'
  const appSecret = '6dd24cff5106d63d1b51d78dee97a182'

  const { code } = ctx.query

  const response = await axios({
    url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`,
  })
  console.log('获取 session_key 和 openid')
  console.log(response.data)
  // {
  //   session_key: 'faS2UuD84MpbCu+JSuVYog==',
  //   openid: 'oYKuX5jewpFSbosQym1EGi4M6Pw8'
  // }

  ctx.body = { sessionKey: response.data.session_key }
})

// 解析手机号
router.get('/api/auth/phoneNumber', async (ctx, next) => {
  const appId = 'wxe12a71ce16b99e75'
  const { sessionKey, encryptedData, iv } = ctx.query

  // 加密数据解密算法
  // https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html

  const pc = new WXBizDataCrypt(appId, sessionKey)
  console.log('pc = new ...')

  const data = pc.decryptData(encryptedData, iv)
  /* 
  如果出现如下错误（一般是在首次请求或请求后又过了几分钟再次请求时出现），可能是因为 wx.login() 是后调用的。
  可以在 onLaunch 中就调用 wx.login() 然后把 code 保存起来，请求时带上保存的 code 。

  Error: Illegal Buffer
      at WXBizDataCrypt.decryptData (F:\mockdemo\src\utils\WXBizDataCrypt.js:24:11)
      at F:\mockdemo\src\router\auth.js:36:19
      at processTicksAndRejections (internal/process/task_queues.js:95:5)
*/
  console.log('解密后的数据')
  console.log(data)
  /* 
  WXBizDataCrypt 用到了 crypto ，但它不用安装，它是 Node.js 的一个模块
  {
    phoneNumber: '13838168037',
    purePhoneNumber: '13838168037',
    countryCode: '86',
    watermark: { timestamp: 1639302037, appid: 'wxe12a71ce16b99e75' }
  }

  如果出现如下错误（一般是在首次请求时出现），把 WXBizDataCrypt.js 中的 new Buffer 改成 Buffer.from 就行了
  (node:12564) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
  (Use `node --trace-deprecation ...` to show where the warning was created)
  */

  ctx.body = data
})

// 解析用户信息
router.get('/api/auth/profile', async (ctx, next) => {
  const appId = 'wxe12a71ce16b99e75'
  const { sessionKey, encryptedData, iv } = ctx.query
  const pc = new WXBizDataCrypt(appId, sessionKey)
  console.log('pc = new ...')

  const data = pc.decryptData(encryptedData, iv)
  console.log(data)

  ctx.body = data
})

module.exports = router.routes()
