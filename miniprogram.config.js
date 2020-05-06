/*
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-06 10:00:30
 * @Description:
 */
module.exports = {
  origin: "https://test.miniprogram.com",
  entry: "/",
  router: { app: ["/"] },
  redirect: {
    notFound: "app",
    accessDenied: "app"
  },
  generate: {
    app: "noconfig",
    appWxss: "default",
    autoBuildNpm: "yarn"
  },
  app: {
    backgroundColor: "#F6F6F6",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#F6F6F6",
    navigationBarTitleText: "QuickStart",
    navigationBarTextStyle: "black"
  },
  appExtraConfig: {
    sitemapLocation: "sitemap.json"
  },
  global: {
    share: true,
    windowScroll: false,
    backgroundColor: "#ECEDEE",
    rem: true
  },
  pages: {},
  optimization: {
    domSubTreeLevel: 10,

    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,

    styleValueReduce: 5000,
    attrValueReduce: 5000
  },
  projectConfig: {
    appid: "wx15bd2ad4e5ed77d1",
    projectname: "kbone-ts-template"
  },
  packageConfig: {
    name: "kbone-ts-template"
  },
  // vue-cli 相关配置
  vue: {
    entryFileName: "main.mp.ts",
    cdnPath: "/",
    cdnLimit: 10240
  }
};
