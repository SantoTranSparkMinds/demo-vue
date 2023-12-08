<template>
  <form @submit.prevent="submitForm">
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

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import InputField from '../../components/FormField/InputField.vue';

export default {
  components: {
    InputField,
  },
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      console.log('this.usernameError', this.username);
      console.log('this.passwordError', this.password);
      if (this.usernameError || this.passwordError) {
        console.log('Form has errors. Cannot submit.');
        return;
      }
      console.log('Form submitted successfully!');
    },
    validateForm() {
      if (this.username.length === 0) {
        this.usernameError = 'Username is required';
      } else {
        this.usernameError = '';
      }
      if (this.password.length === 0) {
        this.passwordError = 'Password is required';
      } else {
        this.passwordError = '';
      }
    },
  },
};
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
