<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="left_side">
        <div class="title">
          <span class="tag">New</span>
          <span class="memo">Download and enjoy!</span>
        </div>
        <div class="content">
          <span class="message"
            >The <span class="message--blue">Easiest</span> way to send money
            safely to anywhere</span
          >
          <span class="sub-message"
            >Send your money to everywhere in the world in less than a minute!
            Download the app now.</span
          >
        </div>
        <div class="content">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div class="right_side">
        <div class="image">
          <img :src="myPhoneImg" alt="" class="phone-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import myImagePath from '../../assets/images/phone_ads.png';

export default defineComponent({
  setup() {
    const myPhoneImg = myImagePath;

    onMounted(() => {});

    return {
      myPhoneImg,
    };
  },
});
</script>

<style scoped>
.component {
  width: 100%;
  background-color: #ffffff;
  padding-top: 120px;
}
.component-wrapper {
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: flex;
}
.left_side {
  width: 50%;
  color: #000000;
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500px;
}
.tag {
  padding: 4px 16px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #feae37;
  font-size: 14px;
}
.memo {
  color: #000000;
}
.content {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 80%;
}
.message {
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
}
.message--blue {
  color: #4759f9;
}
.sub-message {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}
.right_side {
  width: 50%;
  display: flex;
  justify-content: end;
}
.image {
  width: 80%;
}
.phone-image {
  width: 100%;
}
</style>
