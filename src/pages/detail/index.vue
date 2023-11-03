<template>
  <view class="index">
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
        :disabled="charid === '2136'"
        >next page</nut-button
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, toRefs, onMounted, watch } from "vue";
import { Button } from "@nutui/nutui";
import { hiraganaContentList, charId2Char } from "../content";

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
    key.value = ref(char.value.title);
    console.log("change 2 ", charid.value);
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

<style lang="scss">
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ghostwhite;
}
.content-container {
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  margin-bottom: 2.5rem;
  padding: 0.9rem;
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
</style>
