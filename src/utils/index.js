const WXBizDataCrypt = require('./WXBizDataCrypt.js')

const util = {}

util.wait = timeout => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}

module.exports = { WXBizDataCrypt, util }
