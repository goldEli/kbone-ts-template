<!--
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-05-05 19:24:28
 * @Description: 
 -->
<template>
  <div class="admin">
    <!-- <div>Admin - {{ isAdmin }}</div> -->
    <KButton type="primary" @click="returnHome">返回首页</KButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { KButton } from "kbone-ui";

@Component({
  name: 'Admin'
})
export default class Admin extends Vue {
  get isAdmin () {
    return this.$store.state.isAdmin
  }

  returnHome () {
    this.$router.push('/')
  }
}
</script>

<style lang="scss">
.admin {
  text-align: center;
  padding-top: 200px;
}
</style>
