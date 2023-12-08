<template>
  <div class="component">
    <div class="component-wrapper">
      <div
        v-for="content in contents"
        class="conntent"
        :style="{backgroundColor: content.backgroundColor}"
      >
        <div
          :class="
            content.id === 2 ? 'conntent-wrapper-diff' : 'conntent-wrapper'
          "
        >
          <div class="image">
            <img :src="content.icon" alt="" />
          </div>
          <span class="title">{{ content.title }}</span>
          <span class="message">{{ content.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import myImagePath from '../../assets/images/phone_ads.png';
import save from '../../assets/svg/cpn2_save.svg';
import db from '../../assets/svg/cpn2_db.svg';
import lock from '../../assets/svg/cpn2_lock.svg';

export default defineComponent({
  setup() {
    const contents = [
      {
        title: 'Worldwide Payment',
        message:
          'Worldwide Payment require an operational approach and problem-solving methodology that is specifically tailored to drive improvements to the system.',
        id: 1,
        backgroundColor: '#F4F5FF',
        icon: save,
      },
      {
        title:
          'Some distinguishing features that set PayPulse apart from others.',
        message:
          'Exceptional Attributes that Differentiate PayPulse from Competitors',
        id: 2,
        backgroundColor: '',
        icon: '',
      },
      {
        title: 'Transaction fee is free!',
        message:
          'Unlock cost-free transactions on our money sending app! Experience the ease of sending money without any fees. Enjoy seamless financial transactions, where your money stays yours.',
        id: 3,
        backgroundColor: '#FFFAF3',
        icon: db,
      },
      {
        title: 'Secure Transaction',
        message:
          'Safeguard your sunny transactions with our Secure Transfer feature. Enjoy swift and secure money sending that keeps your financial rays shining bright.',
        id: 4,
        backgroundColor: '#EFFBF7',
        icon: lock,
      },
    ];
    const myPhoneImg = myImagePath;
    const dbSvg = db;
    const saveSvg = save;
    const lockSvg = lock;

    onMounted(() => {});

    return {
      contents,
      myPhoneImg,
      dbSvg,
      saveSvg,
      lockSvg,
    };
  },
});
</script>

<style scoped>
.component {
  width: 100%;
  background-color: #ffffff;
  padding: 100px 0;
}
.component-wrapper {
  width: 75%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.conntent {
  flex: 1 1 calc(50% - 10px);

  text-align: left;
  border-radius: 20px;
}

.conntent-wrapper {
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.conntent-wrapper-diff {
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  color: #000000;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
.message {
  color: #000000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
</style>
