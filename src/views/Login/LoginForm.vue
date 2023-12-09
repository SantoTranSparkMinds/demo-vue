<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <InputField
        label="Username"
        v-model="username"
        :error="usernameError"
      ></InputField>

      <InputField
        label="Password"
        type="password"
        v-model="password"
        :error="passwordError"
      ></InputField>

      <button type="submit">Login</button>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import InputField from '../../components/FormField/InputField.vue';

export default {
  components: {
    InputField,
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const usernameError = ref('');
    const passwordError = ref('');
    const loginError = ref('');

    const login = () => {
      console.log('username.value', username.value);

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
};
</script>

<style>
.error-message {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}
</style>
