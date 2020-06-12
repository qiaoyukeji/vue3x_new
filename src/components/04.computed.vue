<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 14:13:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 14:26:11
--> 
<template>
  <div>
    <p>refCount：{{refCount}}</p>
    <p>computed：{{ computedCount }}</p>
    <button @click="refCount++">+1</button>
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref } from "@vue/composition-api";

export default {
  setup() {
    const refCount = ref(0);
    const computedCount = computed(() => refCount.value + 1);
    return { refCount, computedCount };
  }
};
</script>

<style>
</style>