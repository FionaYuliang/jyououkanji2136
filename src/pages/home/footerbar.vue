<template>
  <nut-tabbar @tab-switch="tabSwitch" class="footer-bar">
    <nut-tabbar-item tab-title="首页">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="内容" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="介绍" icon="find"></nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
import { ref } from "vue";
import { Tabbar, TabbarItem, Icon } from "@nutui/nutui";
export default {
  setup() {
    function tabSwitch(item, index) {
      console.log(item, index);
    }
    const icon = {
      active:
        "https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png",
      unactive:
        "https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png",
    };
    return {
      icon,
      tabSwitch,
    };
  },
};
</script>
<style lang="scoped">
/* .footer-bar{
  bottom:0;
  position:fixed;
} */
</style>
