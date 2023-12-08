<template>
  <div class="header">
    <div class="header-container">
      <div class="left_side">
        <div class="logo-wrapper">
          <img :src="myIcon" alt="Icon" class="logo" />
          <span class="logo_name">PayPulse</span>
        </div>
      </div>
      <div class="right_side">
        <div class="menus">
          <router-link
            v-for="(menu, index) in menus"
            :key="index"
            :class="`menu menu__${menu.value}`"
            :to="menu.link"
            >{{ menu.label }}</router-link
          >
          <!-- <span v-for="menu in menus" :class="`menu menu__${menu.value}`">{{
            menu.label
          }}</span> -->
        </div>
        <button class="download">Dowload</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import MyLogo from '../../assets/svg/vue.svg';

export default defineComponent({
  setup() {
    const menus = [
      {label: 'Feature', value: 'feature', link: 'feature'},
      {label: 'Benefits', value: 'benefits', link: 'benefits'},
      {label: 'Testimonital', value: 'testimonital', link: 'testimonital'},
      {label: 'FAQ', value: 'faq', link: 'faq'},
      {label: 'News', value: 'news', link: 'news'},
    ];

    const myIcon = MyLogo;

    onMounted(() => {});

    return {
      menus,
      myIcon,
    };
  },
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
  position: fixed;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.left_side {
}
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo {
  width: 32px;
  height: 32px;
}
.logo_name {
  font-size: 30px;
  font-weight: 700;
  color: #000000;
}
.right_side {
  display: flex;
  align-items: center;
  gap: 48px;
}
.menus {
  display: flex;
  align-items: center;
  gap: 40px;
}
.menu {
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
}
.download {
  padding: 14px 29px;
  background-color: #4759f9;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
</style>
