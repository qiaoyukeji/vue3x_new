<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 22:30:04
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
    <LifeCycle></LifeCycle>
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
export default {
  components: {
    setUp,
    ComRef,
    ComToRefs,
    ComComputed,
    ComWatch1,
    ComWatch2,
    ComWatch3,
    LifeCycle
  },
  name: "App"
};
</script>

<style>
</style>
