<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 14:01:48
--> 
<template>
  <div id="app">
    <setUp p1="aaAAAa"></setUp>
    <ComRef></ComRef>
    <ComToRefs></ComToRefs>
  </div>
</template>

<script>
import setUp from "./components/01.setup";
import ComRef from "./components/02.ref";
import ComToRefs from "./components/03.toRefs";
export default {
  components: {
    setUp,
    ComRef,
    ComToRefs
  },
  name: "App"
};
</script>

<style>
</style>
