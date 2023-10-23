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
      dataList: [
        {
          title: "あア",
          list: [
            {
              name: "あ",
              id: 1,
            },
            {
              name: "あい",
              id: 2,
            },
            {
              name: "あく",
              id: 3,
            },
            {
              name: "あつ",
              id: 4,
            },
          ],
        },
        {
          title: "いイ",
          list: [
            {
              name: "い",
              id: 5,
            },
            {
              name: "いき",
              id: 6,
            },
            {
              name: "いく",
              id: 7,
            },
            {
              name: "いち",
              id: 8,
            },
            {
              name: "いつ",
              id: 9,
            },
            {
              name: "いばら",
              id: 10,
            },
            {
              name: "いも",
              id: 11,
            },
            {
              name: "いん",
              id: 12,
            },
          ],
        },
        {
          title: "うウ",
          list: [
            {
              name: "う",
              id: 13,
            },
            {
              name: "うた",
              id: 14,
            },
            {
              name: "うつ",
              id: 15,
            },
            {
              name: "うね",
              id: 16,
            },
            {
              name: "うら",
              id: 17,
            },
            {
              name: "うん",
              id: 18,
            },
          ],
        },
        {
          title: "えエ",
          list: [
            {
              name: "えい",
              id: 19,
            },
            {
              name: "えき",
              id: 20,
            },
            {
              name: "えつ",
              id: 21,
            },
            {
              name: "えん",
              id: 22,
            },
          ],
        },
        {
          title: "おオ",
          list: [
            {
              name: "お",
              id: 23,
            },
            {
              name: "おう",
              id: 24,
            },
            {
              name: "おか",
              id: 25,
            },
            {
              name: "おく",
              id: 26,
            },
            {
              name: "おそれ",
              id: 27,
            },
            {
              name: "おつ",
              id: 28,
            },
            {
              name: "おれ",
              id: 29,
            },
            {
              name: "おろす",
              id: 30,
            },
            {
              name: "おん",
              id: 31,
            },
          ],
        },
        {
          title: "かカ",
          list: [
            {
              name: "か",
              id: 32,
            },
            {
              name: "が",
              id: 33,
            },
            {
              name: "かい",
              id: 34,
            },
            {
              name: "がい",
              id: 35,
            },
            {
              name: "かき",
              id: 36,
            },
            {
              name: "かき",
              id: 37,
            },
            {
              name: "かく",
              id: 38,
            },
            {
              name: "がく",
              id: 39,
            },
            {
              name: "かける",
              id: 40,
            },
            {
              name: "かた",
              id: 41,
            },
            {
              name: "かつ",
              id: 42,
            },
            {
              name: "かぶ",
              id: 43,
            },
            {
              name: "かま",
              id: 44,
            },
            {
              name: "かま",
              id: 45,
            },
            {
              name: "かる",
              id: 46,
            },
            {
              name: "かん",
              id: 47,
            },
            {
              name: "がん",
              id: 48,
            },
          ],
        },
        {
          title: "きキ",
          list: [
            {
              name: "き",
              id: 49,
            },
            {
              name: "江苏",
              id: 50,
            },
            {
              name: "江西",
              id: 51,
            },
          ],
        },
        {
          title: "くク",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "けケ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "こコ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "さサ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "くク",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "しシ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "すス",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "せセ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
        {
          title: "そソ",
          list: [
            {
              name: "辽宁",
              id: 18,
            },
          ],
        },
      ],
    });

    const clickItem = (key: string, item: any) => {
      console.log("clickItem", key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), clickItem, clickIndex };
  },
};
</script>
<style lang="scoped"></style>
