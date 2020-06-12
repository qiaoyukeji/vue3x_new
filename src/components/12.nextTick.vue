<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-13 00:14:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-13 00:27:47
--> 
<template>
  <div>
    <h1>学习 $nextTick</h1>
    <button v-if="isShowInput===false" @click="showInput">展示文本框</button>
    <input type name id v-else ref="ipt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowInput: false
    };
  },
  methods: {
    showInput() {
      this.isShowInput = true;
      //   setTimeout(() => {
      //     this.$refs.ipt.focus();
      //   }, 0);
      // 当组件根据最新的data数据重新渲染之后，在执行回调函数中的操作
      this.$nextTick(() => {
        this.$refs.ipt.focus();
      });
    }
  }
};
</script>

<style>
</style>