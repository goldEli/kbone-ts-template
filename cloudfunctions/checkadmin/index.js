/*
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-29 17:00:03
 * @Description:
 */
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // let result = await db.collection('admin').where({
  //   openid: wxContext.OPENID
  // }).get()

  return true
}
