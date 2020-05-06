<!--
 * @Author: miaoyu
 * @Date: 2020-05-06 17:44:14
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-06 17:55:30
 * @Description: 
 -->
<template>
  <ul class="nav-list">
    <li
      v-for="item in navListData"
      v-bind:key="item.key"
      class="nav-list-item"
      @click="goTo(item.router)"
    >
      <span>{{ item.label }}</span>
      <i class="iconfont icon-right"></i>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

interface NavListDataItem {
  key: string;
  label: string;
  router: string;
}

export type NavListData = NavListDataItem[]

@Component
export default class NavList extends Vue {
  @Prop() private navListData!: NavListData;

  goTo(router: NavListDataItem["router"]) {
    this.$router.push(router);
  }
}
</script>

<style lang="scss">
.nav-list {
  width: 100%;
  padding-bottom: 8px;
}
.nav-list-item {
  font-size: 14px;
  height: 40px;
  background-color: #ffffff;
  padding: 0 16px 0 16px;
  border-bottom: 1px solid #ecedee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav-list-item:active {
  background-color: #ecedee;
}
</style>
