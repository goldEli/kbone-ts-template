<!--
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-06 17:59:02
 * @Description: 
 -->
<template>
  <div class="admin">
    <!-- <div>Admin - {{ isAdmin }}</div> -->
    <GoBack url="/" label="返回菜单" />
    <NavList :navListData="adminList.agent" />
    <NavList :navListData="adminList.superAdmin" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { KButton } from "kbone-ui";
import GoBack from "@/components/GoBack.vue";
import NavList from "@/components/NavList.vue";

@Component({
  name: "Admin",
  components: {
    GoBack,
    NavList
  }
})
export default class Admin extends Vue {
  adminList = {
    agent: [
      { key: "0", label: "下单", router: "/agentManagement" },
      { key: "1", label: "下级代理", router: "/agentManagement" },
      { key: "2", label: "添加代理", router: "/" },
      { key: "3", label: "我的订单", router: "/agentManagement" },
      { key: "4", label: "收货地址管理", router: "/agentManagement" },
      { key: "5", label: "我的奖金", router: "/agentManagement" },
      { key: "6", label: "修改个人信息", router: "/agentManagement" }
    ],
    superAdmin: [
      { key: "1", label: "导出订单", router: "/agentManagement" },
      { key: "2", label: "上传快递单号", router: "/agentManagement" }
    ]
  };

  get isAdmin() {
    return this.$store.state.isAdmin;
  }
}
</script>

<style lang="scss">
.admin {
  width: 100%;
}
</style>
