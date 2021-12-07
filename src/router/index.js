const compose = require('koa-compose')

// 在这里引入你的路由模块
const demo = require('./demo.js')
const cargoods = require('./cargoods.js')

// 在这里注册你的路由模块
const routers = [demo, cargoods]

const registerRouter = () => compose(routers)
module.exports = registerRouter
