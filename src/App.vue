<template>
<div>
 <mynav></mynav>
 <xialai></xialai>
 <tab></tab>
 </div>
 </template>

<script>
import Vue from "vue"  //"vue"是vue的核心模块
import nav from "./component/nav.vue"  //  后面的路径前面要加./代表当前路径 
import xiala from "./component/xiala.vue"
import table from "./component/table.vue"
Vue.component("mynav",nav)    //Vue组件的里面的两个参数(你创建的组件名,拟引入的组件)
Vue.component("xialai",xiala)
Vue.component("tab",table)
export default {

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
