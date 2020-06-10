<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 01:24:15
--> 
<template>
  <div id="app">
    <setUp p1="aaAAAa"></setUp>
    <ComRef></ComRef>
  </div>
</template>

<script>
import setUp from "./components/01.setup";
import ComRef from "./components/02.ref";
export default {
  components: {
    setUp,
    ComRef
  },
  name: "App"
};
</script>

<style>
</style>
