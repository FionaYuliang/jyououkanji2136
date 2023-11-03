<template>
  <nut-elevator
    class="customer-elevator"
    :index-list="dataList"
    :is-sticky="true"
    height="100vh"
    @click-item="clickItem"
    @click-index="clickIndex"
  >
  </nut-elevator>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { hiraganaDataList } from "../dataList";
import { reactive } from "vue";
const router = useRouter();

const dataList = reactive([...hiraganaDataList]);

const clickItem = (key: string, item: any) => {
  console.log("clickItem", key, JSON.stringify(item));
  router.push({
    path: "/pages/detail",
    query: {
      charid: item.id,
    },
  });
};

const clickIndex = (key: string) => {
  console.log(key);
};
</script>
<style lang="less" scoped>
.customer-elevator {
  overflow: hidden;
}
</style>
