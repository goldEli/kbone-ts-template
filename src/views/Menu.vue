<!--
 * @Author: miaoyu
 * @Date: 2020-04-30 15:01:57
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-05 19:23:09
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
          <span @click="decrement(item._id)" class="menu-item-toolbar-btn">
            <i class="iconfont icon-minus"></i>
          </span>
          <span>{{ item.number }}</span>
          <span @click="increment(item._id)" class="menu-item-toolbar-btn">
            <i class="iconfont icon-plus"></i>
          </span>
        </div>
        <p>{{ item.name }}</p>
        <p>{{ `${item.price}元/${item.unit}/${item.weight}` }}</p>
      </li>
    </ul>
    <KToast type="loading" v-model="loadingToast">数据加载中</KToast>
    <div @click="openAdmin()" class="user-icon-box">
      <i class="iconfont icon-admin"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { KToast } from "kbone-ui";

export interface MenuListItem {
  _id: string;
  name: string;
  price: number;
  agentPrice: number;
  url: string;
  unit: string;
  weight: string;
}

interface MenuListItemWithLocal extends MenuListItem {
  number: number;
}

export type MenuList = MenuListItem[];
type MenuListWithLocal = MenuListItemWithLocal[];

@Component
export default class Menu extends Vue {
  @Prop() private menuList!: MenuList;
  loadingToast = true;

  data: MenuListWithLocal = this.menuList.map(item => ({ ...item, number: 0 }));

  @Watch("menuList")
  onChange(val: MenuList, oldVal: MenuList) {
    if (Array.isArray(this.menuList)) {
      this.loadingToast = false;
    }
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

  openAdmin() {
    this.$router.push("/admin");
  }
}
</script>

<style lang="scss">
.menu {
  background-color: #e3953f;
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 8px;
  position: relative;
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
  font-size: 18px;
}
.menu-item-toolbar-btn {
  display: flex;
  justify-content: center;
  flex: 1;
}
.menu-item-toolbar-btn:active {
  transform: scale(2);
  transition: all 0.4s linear;
}
.user-icon-box {
  position: fixed;
  bottom: 20%;
  right: 32px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: "#fff";
  border-radius: 50%;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.6);
}
.user-icon-box i {
  font-size: 18px;
}
</style>
