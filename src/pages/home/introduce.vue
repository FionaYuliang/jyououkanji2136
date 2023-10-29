<template>
  <div class="intro-container">
    <div class="intro">
      <nut-collapse
        v-model:active="activeName"
        icon="down-arrow"
        :accordion="true"
      >
        <nut-collapse-item :title="title1" :name="1">
          <template v-slot:extraRender>简介</template>
          这是一个辅助日语学习者的小程序
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          2023 年 10月 27日:正式上线 ; 2023 年 10月 20日:开始开发;
        </nut-collapse-item>
      </nut-collapse>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: "日本汉字 2136 小程序使用说明",
      title2: "版本更新历史",
    });
    return {
      activeName,
      ...toRefs(title),
    };
  },
};
</script>
<style lang="scoped">

</style>