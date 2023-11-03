<template>
  <view class="index">
    <!-- <SearchBar></SearchBar> -->
    <HiraganaElevator></HiraganaElevator>
    <!-- <FooterBar></FooterBar> -->
  </view>
</template>

<script lang="ts" setup>
import SearchBar from "./searchbar.vue";
import HiraganaElevator from "./elevator.vue";
// import FooterBar from "./footerbar.vue";
</script>

<style lang="scss" scoped>
.taro_router .taro_page.taro_tabbar_page,
.taro_router .taro_page.taro_page_show.taro_page_stationed {
  background-color: azure;
}
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
