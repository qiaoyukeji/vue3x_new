<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 14:00:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 14:09:35
--> 
<template>
  <div>
    <p>count::{{count}}</p>
    <button @click="add()">+1</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 0,
      name: "zhangsan"
    });
    // 定义自增加一函数
    const add = () => {
      state.count++;
    };
    return { ...toRefs(state), add };
  }
};
</script>

<style>
</style>