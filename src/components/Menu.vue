<!--
 * @Author: miaoyu
 * @Date: 2020-04-30 15:01:57
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-04 13:29:27
 * @Description: 
 -->
<template>
  <div class="menu">
    <ul class="menu-container">
      <li class="menu-item" v-for="item in data" :key="item._id">
        <div class="menu-item-imgbox">
          <img v-bind:src="item.url" mode="widthFix" />
        </div>
        <div class="menu-item-toolbar">
          <i @click="decrement(item._id)" class="iconfont icon-minus"></i>
          <span>{{ item.number }}</span>
          <i @click="increment(item._id)" class="iconfont icon-plus"></i>
        </div>
        <p>{{ item.name }}</p>
        <p>10元/袋/150g</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { KButton } from "kbone-ui";

export interface MenuListItem {
  _id: string;
  name: string;
  price: number;
  url: string;
}

interface MenuListItemWithLocal extends MenuListItem {
  number: number;
}

export type MenuList = MenuListItem[];
type MenuListWithLocal = MenuListItemWithLocal[];

@Component
export default class HelloWorld extends Vue {
  @Prop() private menuList!: MenuList;

  data: MenuListWithLocal = this.menuList.map(item => ({ ...item, number: 0 }));

  @Watch("menuList")
  onChange(val: MenuList, oldVal: MenuList) {
    this.data = this.menuList.map(item => ({ ...item, number: 0 }));
  }

  increment(id: MenuListItem["_id"]) {
    this.data.forEach(item => {
      if (id === item._id) {
        item.number = item.number + 1;
      }
    });
  }

  decrement(id: MenuListItem["_id"]) {
    this.data.forEach(item => {
      if (id === item._id && item.number > 0) {
        item.number = item.number - 1;
      }
    });
  }
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
.menu-item-toolbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menu-item-toolbar i {
  font-size: 14px;
  // position: relative;
}
.menu-item-toolbar i:active {
  transform: scale(2);
  transition: all 0.4s linear;
}
</style>
