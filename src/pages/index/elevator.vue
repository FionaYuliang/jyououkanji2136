<template>
  <nut-elevator
    :index-list="dataList"
    :is-sticky="true"
    :height="300"
    @click-item="clickItem"
    @click-index="clickIndex"
  >
  </nut-elevator>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const dataList = reactive([
  {
    title: "A",
    list: [
      {
        name: "安徽",
        id: 1,
      },
    ],
  },
]);

const clickItem = (key: string, item: any) => {
  // console.log("clickItem", key, JSON.stringify(item));
};

const clickIndex = (key: string) => {
  console.log(key);
};
</script>
<style lang="scoped"></style>
