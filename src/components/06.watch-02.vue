<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 20:29:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 20:40:45
--> 
<template>
  <div>
    <p>{{refCount}}</p>
    <button @click="stop()">stop</button>
  </div>
</template>

<script>
import { watch, ref, reactive } from "@vue/composition-api";
export default {
  setup() {
    const refCount = ref(0);

    const stop = watch(refCount, () => {
      console.log("111");
    });
    setTimeout(() => {
      refCount.value++;
    }, 1500);
    return { refCount, stop };
  }
};
</script>

<style>
</style>