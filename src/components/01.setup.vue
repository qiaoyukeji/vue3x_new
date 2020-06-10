<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:28:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 00:48:57
--> 
<template>
  <div>
    <p>{{count}}</p>
    <button @click="count+=1">+1</button>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    // console.log("setup");
    // console.log(props);
    // console.log(ctx);
    const state = reactive({ count: 0 });
    // console.log(state);
    // state.count++;
    // console.log(state);
    return state;
  },
  beforeCreate() {
    // console.log("beforeCreate");
  },
  created() {
    // console.log("created");
  },
  props: { p1: String }
};
</script>

<style>
</style>