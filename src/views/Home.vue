<!--
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-30 14:31:29
 * @Description:
 -->
<template>
  <div class="home">
    <KFlex>
      <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
      <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
      <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
      <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
    </KFlex>
     <KButtonArea>
        <KButton type="primary" >页面主要操作</KButton>
        <KButton type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" getUserInfo </KButton>
        <KButton type="primary" :loading="true">Loading</KButton>
        <KButton type="primary" :disabled="true">禁止点击</KButton>
        <KButton >页面次要操作</KButton>
        <KButton type="warn">警告类操作</KButton>
        <KButton type="warn" :loading="true">警告类操作</KButton>
        <KButton type="warn" :disabled="true">警告类操作</KButton>
    </KButtonArea>

    <!-- <div>123</div>
    <div>Hello Kbone</div>
    <KButton type="primary" v-if="isAdmin" @click="openAdmin">打开后台</KButton> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { KView, KFlex, KFlexItem, KSwiper, KSwiperItem, KButton, KButtonArea, KButton } from "kbone-ui";

@Component({
  KButtonArea,
  KView,
  KFlex,
  KFlexItem,
  KSwiper,
  KSwiperItem,
  KButton
})
export default class Home extends Vue {
  get isAdmin() {
    return this.$store.state.isAdmin;
  }
  set isAdmin(val: Boolean) {
    this.$store.commit("setIsAdmin", val);
  }

  created() {
    wx.setNavigationBarTitle({
      title: '你的顶部Title写这里即可'
    })
    if (this.isAdmin === undefined) {
      // 调用云函数
      wx.cloud.callFunction({
        name: "checkadmin",
        data: {},
        success: (result: any) => {
          // console.log('[云函数] [checkadmin] result: ', result)
          this.isAdmin = result["result"];
        },
        fail: (error: any) => {
          console.error("[云函数] [checkadmin] result 调用失败", error);
          this.isAdmin = false;
        }
      });
    }
    wx.cloud.callFunction({
      name: "getBooks",
      data: {},
      success: (result: any) => {
        console.log(result);
      }
    });
  }

  openAdmin() {
    this.$router.push("/admin");
  }
}
</script>

<style lang="scss">
.home {
  // text-align: center;
  // padding-top: 8px;
}
</style>
