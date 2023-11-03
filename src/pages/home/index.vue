<template>
  <view class="index">
    <SearchBar></SearchBar>
    <HiraganaElevator></HiraganaElevator>
    <!-- <FooterBar></FooterBar> -->
  </view>
</template>

<script lang="ts" setup>
import SearchBar from "./searchbar.vue";
import HiraganaElevator from "./elevator.vue";
// import FooterBar from "./footerbar.vue";
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
