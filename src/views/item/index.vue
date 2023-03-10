<script setup>
import itemcontainer from "../../components/itemcontainer.vue";
import { useStore } from "@/stores/index.js";
name: "item";
const store = useStore();

//进入题目页面，开始计时
store.remberTime();
</script>

<template><itemcontainer father-component="item"></itemcontainer></template>

<style scoped></style>
