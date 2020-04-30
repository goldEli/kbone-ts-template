<!--
 * @Author: miaoyu
 * @Date: 2020-04-30 15:01:57
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-30 17:58:24
 * @Description: 
 -->
<template>
  <div class="menu">
    <p>123</p>
    <ul id="example-1">
      <li v-for="item in menuList" :key="item.id">
        <img v-bind:src="item.src" />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { KView, KFlex } from "kbone-ui";

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

<style scoped></style>
