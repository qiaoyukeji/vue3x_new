<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-12 23:59:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-13 00:04:26
--> 
<template>
  <div>
    <h3 ref="h3Ref">qwer</h3>
  </div>
</template>

<script>
import { ref, onMounted } from "@vue/composition-api";
export default {
  setup() {
    const h3Ref = ref(null);

    onMounted(() => {
      console.log(h3Ref.value);
      h3Ref.value.style.color = "red";
    });
    return {
      h3Ref
    };
  }
};
</script>

<style>
</style>