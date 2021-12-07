const compose = require('koa-compose')

// 在这里引入你的路由模块
const demo = require('./demo.js')
demo.prefix('/api/demo')
const cargoods = require('./cargoods.js')
const parts = require('./parts.js')
const repair = require('./repair.js')

// 在这里注册你的路由模块
const routers = [demo.routes(), cargoods, parts, repair]

const registerRouter = () => compose(routers)
module.exports = registerRouter
