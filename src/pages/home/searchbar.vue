<template>
  <nut-searchbar
    v-model="state.searchValue"
    background="linear-gradient(to right, #9866F0, #EB4D50)"
    input-background="#fff"
  >
  </nut-searchbar>
</template>
<script lang="ts" setup>
import { toRefs, reactive } from "vue";

const state = reactive({
  searchValue: "请点击下方目录索引中的平假名",
});
</script>
