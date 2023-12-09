<template>
  <div class="login-form-wrapepr">
    <form @submit.prevent="login" class="login-form">
      <InputField
        label="Username"
        v-model="username"
        :error="usernameError"
        :placeholder="'Username'"
      ></InputField>

      <InputField
        label="Password"
        type="password"
        v-model="password"
        :error="passwordError"
        :placeholder="'Password'"
      ></InputField>

      <button class="login-button" type="submit">Login</button>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import InputField from '../../components/FormField/InputField.vue';
import router from '../../router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const usernameError = ref('');
    const passwordError = ref('');
    const loginError = ref('');

    const login = () => {
      console.log('username.value', username.value);
      // setTimeout(() => {
      //   router.push({name: 'Landing'});
      // }, 500);

      if (username.value === '') {
        usernameError.value = 'Username is required';
      }

      if (password.value === '') {
        passwordError.value = 'Password is required';
      }

      if (usernameError.value === '' && passwordError.value === '') {
        loginError.value = 'Invalid username or password';
      }
    };

    return {
      username,
      password,
      usernameError,
      passwordError,
      loginError,
      login,
    };
  },
  components: {
    InputField,
  },
};
</script>

<style scoped>
.login-form-wrapepr {
  width: 100%;
}
.error-message {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.login-button {
  width: 100%;
  border-radius: 10px;
  background: #20df7f;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}
</style>
