<template>
  <view class="index">
    <SearchBar></SearchBar>
    <!-- <SideNavBar></SideNavBar> -->
    <HiraganaElevator></HiraganaElevator>
    {{ msg }}
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import SearchBar from "./searchbar.vue";
import HiraganaElevator from "./elevator.vue";

// import { Searchbar } from "@nutui/nutui-taro";

const state = reactive({
  msg: "欢迎使用日本汉字2136小程序",
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
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
