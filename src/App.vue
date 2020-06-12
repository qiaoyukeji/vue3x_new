<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-13 00:16:12
--> 
<template>
  <div id="app">
    <!-- <setUp p1="aaAAAa"></setUp> -->
    <!-- <ComRef></ComRef> -->
    <!-- <ComToRefs></ComToRefs> -->
    <!-- <ComComputed></ComComputed> -->
    <!-- <ComWatch1></ComWatch1> -->
    <!-- <ComWatch2></ComWatch2> -->
    <!-- <ComWatch3></ComWatch3> -->
    <!-- <LifeCycle></LifeCycle> -->

    <h2>父组件</h2>
    <button @click="color='red'">红</button>
    <button @click="color='yellow'">黄</button>
    <button @click="color='blue'">蓝</button>
    <hr />
    <ComSon></ComSon>

    <hr />
    <RefDom></RefDom>
    <hr />
    <ComNextTick></ComNextTick>
  </div>
</template>

<script>
import setUp from "./components/01.setup";
import ComRef from "./components/02.ref";
import ComToRefs from "./components/03.toRefs";
import ComComputed from "./components/04.computed";
import ComWatch1 from "./components/05.watch-01";
import ComWatch2 from "./components/06.watch-02";
import ComWatch3 from "./components/07.watch-03";
import LifeCycle from "./components/08.lifecycle";
import ComSon from "./components/09.son";
import ComSonson from "./components/10.son-son";
import { ref, provide } from "@vue/composition-api";
import RefDom from "./components/11.refDOM";
import ComNextTick from "./components/12.nextTick";
export default {
  components: {
    setUp,
    ComRef,
    ComToRefs,
    ComComputed,
    ComWatch1,
    ComWatch2,
    ComWatch3,
    LifeCycle,
    ComSon,
    ComSonson,
    RefDom,
    ComNextTick
  },
  name: "App",
  setup() {
    const color = ref("red");
    //provide('要共享的数据名称', 被共享的数据)
    provide("color", color);

    return {
      color
    };
  }
};
</script>

<style>
</style>
