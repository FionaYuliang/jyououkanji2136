<template>
  <div class="index">
    <div class="content-container">
      <div class="first-level">あ</div>
      <div class="second-level">
        <div class="pronunce-level">あい</div>
        <div class="kanji-level">0004愛</div>
        <div class="word-level">
          <div class="word">爱情</div>
          <div class="word">爱用</div>
          <div class="word">爱娇</div>
          <View>hello:{{ char }}</View>
        </div>
      </div>
    </div>
    <div class="button-container">
      <nut-button color="#7232dd" @click="onClick.back">返回</nut-button>
      <nut-button color="#7232dd">prev page</nut-button>
      <nut-button color="#7232dd" plain>next page</nut-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { Button } from "@nutui/nutui";

const route = useRoute();
const router = useRouter();
const char = route.query.char;

const onClick = {
  back: () => {
    router.go(-1);
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
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 20px;
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
  margin-top: 20px;
  padding-left: 10px;
  font-size: large;
  font-weight: 500;
  color: red;
  border: solid 1px red;
}
.word-level {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.word {
  margin-left: 10px;
  margin-right: 10px;
}
.button-container {
  width: 100%;

  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
