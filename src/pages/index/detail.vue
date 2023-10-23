<template>
  <view class="index">
    <view class="first-level">あ</view>
    <view class="second-level">あい</view>
    <view class="kanji-level"> 0001爱</view>
    <view class="word-level">爱情 爱娇</view>
    <view class="button">
      <!-- <button> 上一页</button>
      <button> 下一页</button> -->
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
