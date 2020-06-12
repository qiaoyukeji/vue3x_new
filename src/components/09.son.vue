<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 22:42:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 23:03:18
--> 
<template>
  <div>
    <h3>子组件</h3>
    <hr />
    <ComSonson></ComSonson>
  </div>
</template>

<script>
import { inject } from "@vue/composition-api";
import ComSonson from "./10.son-son";
export default {
  components: {
    ComSonson
  }
};
</script>

<style>
</style>