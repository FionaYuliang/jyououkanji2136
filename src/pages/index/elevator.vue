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
<script lang="ts">
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      dataList: [],
    });

    const clickItem = (key: string, item: any) => {
      // console.log("clickItem", key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), clickItem, clickIndex };
  },
};
</script>
<style lang="scoped"></style>
