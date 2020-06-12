<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 22:43:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 23:03:10
--> 
<template>
  <div>
    <h5 :style="{color:color}">孙组件</h5>
  </div>
</template>

<script>
import { inject } from "@vue/composition-api";
export default {
  setup() {
    //   调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const color = inject("color");
    console.log(color.value);
    return {
      color
    };
  }
};
</script>

<style>
</style>