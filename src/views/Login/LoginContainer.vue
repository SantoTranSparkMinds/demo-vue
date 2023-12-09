<template>
  <div class="login-container">
    <h1>Sign in</h1>
    <h4>Sign in and start managing your candidates!</h4>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import LoginForm from './LoginForm.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    LoginForm,
  },
});
</script>

<style scoped>
.login-container {
  width: 30%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
