<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 20:50:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 21:46:26
--> 
<template>
  <div>
    <input type="text" name id v-model="kw" />
  </div>
</template>

<script>
import { watch, ref, reactive } from "@vue/composition-api";
export default {
  setup() {
    const kw = ref("");
    // 打印函数
    const print = s => {
      console.log(s);
    };
    const asyncPrint = s => {
      return setTimeout(() => {
        console.log(s);
      }, 1000);
    };
    watch(kw, (newVal, oldVal, onClean) => {
      //   print(newVal);
      const timeId = asyncPrint(newVal);
      console.log("timeId1:" + timeId);

      // 清除上一个异步的setTimeOut
      onClean(() => {
        console.log("timeId2:" + timeId);

        clearTimeout(timeId);
      });
    });
    return {
      kw
    };
  }
};
</script>

<style>
</style>