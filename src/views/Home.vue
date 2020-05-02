<!--
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-02 15:18:17
 * @Description:
 -->
<template>
  <div class="home">
    <Menu :menuList="menuList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu, { MenuList } from "@/components/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class Home extends Vue {
  private menuList: MenuList[] = [];

  // get isAdmin() {
  //   return this.$store.state.isAdmin;
  // }
  // set isAdmin(val: Boolean) {
  //   this.$store.commit("setIsAdmin", val);
  // }

  created() {
    // wx.setNavigationBarTitle({
    //   title: "123"
    // });
    // if (this.isAdmin === undefined) {
    //   // 调用云函数
    //   wx.cloud.callFunction({
    //     name: "checkadmin",
    //     data: {},
    //     success: (result: any) => {
    //       // console.log('[云函数] [checkadmin] result: ', result)
    //       this.isAdmin = result["result"];
    //     },
    //     fail: (error: any) => {
    //       console.error("[云函数] [checkadmin] result 调用失败", error);
    //       this.isAdmin = false;
    //     }
    //   });
    // }
    wx.cloud.callFunction({
      name: "getMenuList",
      data: {},
      success: (res: any) => {
        console.log(res.result.data)
        this.menuList = res.result.data;
      }
    });
  }

  // openAdmin() {
  //   this.$router.push("/admin");
  // }
}
</script>

<style lang="scss">
.home {
  // text-align: center;
  // padding-top: 8px;
}
</style>
