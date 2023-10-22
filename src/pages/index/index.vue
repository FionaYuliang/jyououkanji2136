<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }} <Dongdong />
    <view class="btn"> </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Dongdong } from "@nutui/icons-vue-taro";
import { AtSearchBar } from "taro-ui-vue3";
export default {
  name: "Index",
  components: {
    Dongdong,
  },
  setup() {
    const state = reactive({
      msg: "欢迎使用 NutUI4.0 开发小程序",
      msg2: "你成功了～",
      type: "text",
      show: false,
      cover: false,
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
