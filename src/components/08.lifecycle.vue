<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 21:50:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 22:29:07
--> 
<template>
  <div></div>
</template>

<script>
import {
  watch,
  ref,
  reactive,
  onBeforeMount,
  onMounted
} from "@vue/composition-api";
export default {
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
  }
};
</script>

<style>
</style>