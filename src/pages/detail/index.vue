<template>
  <view class="index-2edb539">
    <view class="content-container">
      <view class="first-level">{{ key }}</view>
      <view class="second-level">
        <view class="pronunce-level">{{ char.name }}</view>

        <template v-for="item of char.child">
          <view class="kanji-level">{{ item.hanziId }}{{ item.hanzi }}</view>
          <view class="word-level">
            <template v-for="each of item.word">
              <view class="word">{{ each }}</view>
            </template>
          </view>
        </template>
      </view>
    </view>
    <view class="button-container">
      <nut-button
        color="#00BFFF"
        :disabled="charid === '1'"
        @click="onClick.back"
        >prev page</nut-button
      >
      <nut-button color="#00BFFF" @click="onClick.home">home</nut-button>
      <nut-button
        color="#00BFFF"
        @click="onClick.next"
        plain
        :disabled="charid === `${maxLength}`"
        >next page</nut-button
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, toRefs, onMounted, watch } from "vue";
import { Button } from "@nutui/nutui";
import { charId2Char } from "../content";
import { maxLength } from "../dataList";

const route = useRoute();
const router = useRouter();
let routeCharId = parseInt(route.query.charid as string);
if (routeCharId <= 0 || Number.isNaN(routeCharId)) {
  routeCharId = 1;
}

const charid = ref(`${routeCharId}`);
const char = ref(charId2Char[charid.value]);
const key = ref(char.value.title);
watch(
  () => route.query.charid,
  () => {
    charid.value = route.query.charid as string;
    char.value = charId2Char[charid.value];
    key.value = char.value.title;
  }
);

console.log("a => ", char);
const onClick = {
  back: () => {
    // router.go(-1);
    router.push({
      path: "/pages/detail",
      query: {
        charid: parseInt(charid.value) - 1,
      },
    });
  },
  home: () => {
    router.push("/pages/home");
  },
  next: () => {
    router.push({
      path: "/pages/detail",
      query: {
        charid: parseInt(charid.value) + 1,
      },
    });
  },
};
</script>

<style lang="less">
.index-2edb539 {
  background-color: azure;
  min-height: 100vh;
  .content-container {
    margin-top: 0.75rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    padding: 0.9rem;
    padding-bottom: 150px;
    text-align: left;
  }
  .first-level {
    font-size: larger;
    font-weight: 900;
  }
  .second-level {
    font-size: large;
  }

  .pronunce-level {
    font-size: large;
    font-weight: 800;
  }
  .kanji-level {
    margin-top: 40px;
    padding-left: 10px;
    font-size: large;
    font-weight: 500;
    color: red;
    border: solid 1px red;
  }
  .word-level {
    margin-top: 10px;
    display: inline-block;
  }
  .word {
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 400;
  }
  .button-container {
    width: 100%;
    position: fixed;
    bottom: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
