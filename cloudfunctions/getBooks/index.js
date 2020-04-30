/*
 * @Author: miaoyu
 * @Date: 2020-04-29 17:05:41
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-29 17:09:21
 * @Description: get books
 */
// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  let result = await db
    .collection("books")
    .where({
      publishInfo: {
        country: "United States"
      }
    })
    .get();

  return result
};
