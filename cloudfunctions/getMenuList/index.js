/*
 * @Author: miaoyu
 * @Date: 2020-04-30 16:18:36
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-30 17:13:47
 * @Description:
 */
// 云函数入口文件
const cloud = require("wx-server-sdk");

// 云函数入口函数
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  let res = await db
    .collection("menu")
    .where({})
    .get();

  return res;
};
