<!--
 * @Author: miaoyu
 * @Date: 2020-05-06 16:30:49
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-06 17:19:32
 * @Description: go back
 -->
<template>
  <div class="go-back" @click="goBack">
    <i class="iconfont icon-left"></i>
    <span>{{label}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class GoBack extends Vue {
  @Prop() private label!: string;
  @Prop() private url!: string;

  
  
  goBack() {
    this.url && this.$router.push(this.url);
  }

}
</script>

<style lang="scss">
.go-back {
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #000;
  vertical-align: middle;
}
</style>
