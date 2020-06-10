<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 01:22:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 01:27:09
--> 
<template>
  <div>
    <p>ref : {{refCount}}</p>
    <button @click="refCount++">+1</button>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const refCount = ref(0);
    console.log(refCount.value);
    return {
      refCount
    };
  }
};
</script>

<style>
</style>