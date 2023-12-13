<template>
  <div class="login-container">
    <h1 class="text-5xl text-[#333333]">Sign in</h1>
    <h4 class="text-lg text-[#333333]">
      Sign in and start managing your candidates!
    </h4>
    <LoginForm :login="login" />
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import router from '../../router';
import LoginForm from './LoginForm.vue';

export default defineComponent({
  setup() {
    onMounted(() => {});

    const login = () => {
      setTimeout(() => {
        router.push({name: 'Landing'});
      }, 500);
    };

    return {login};
  },
  components: {
    LoginForm,
  },
});
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  background: #ffffff;
}
</style>
