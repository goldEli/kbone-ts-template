<!--
 * @Author: miaoyu
 * @Date: 2020-04-30 15:01:57
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-02 16:06:24
 * @Description: 
 -->
<template>
  <div class="menu">
    <ul class="menu-container">
      <li class="menu-item" v-for="item in menuList" :key="item.id">
        <div class="menu-item-imgbox">
          <img v-bind:src="item.url" mode="widthFix" />
        </div>
        <div>
          <button class="btn">+</button>
          <button class="btn">-</button>
        </div>
        <p>{{ item.name }}</p>
        <p>10元/袋/150g</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { KButton } from "kbone-ui";

export interface MenuListItem {
  id: string;
  name: string;
  price: number;
  url: string;
}

export type MenuList = MenuListItem[];

@Component
export default class HelloWorld extends Vue {
  @Prop() private menuList!: MenuList;
}
</script>

<style lang="scss">
.menu {
  background-color: #e3953f;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 8px;
}
.menu-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.menu-item {
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
}

.menu-item-imgbox {
  width: 100%;
}
.menu-item-imgbox img {
  width: 100%;
}
.btn {
  background-color: #FFCC00;
  color: #FFF;
  width: 20%;
  margin-right: 8px;
}
</style>
