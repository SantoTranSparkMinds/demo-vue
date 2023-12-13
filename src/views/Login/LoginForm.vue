<template>
  <div class="login-form-wrapepr">
    <form @submit.prevent="handleLogin" class="login-form">
      <InputField
        label="Username"
        v-model="username"
        :error="errors.username"
        :placeholder="'Username'"
      ></InputField>

      <InputField
        label="Password"
        type="password"
        v-model="password"
        :error="errors.password"
        :placeholder="'Password'"
      ></InputField>

      <Button
        class="bg-[#4759f9] rounded-[10px] w-full border-none hover:opacity-80 focus:outline-none h-[42px]"
        label="Login"
        type="submit"
      />
    </form>
    <DialogError
      :title="title"
      :message="message"
      :visibleDialog="visibleDialog"
      @onCancelDialog="hideDialog()"
    />
  </div>
</template>

<script>
import {ref} from 'vue';
import {onMounted, defineComponent} from 'vue';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/yup';
import * as yup from 'yup';
import InputField from '../../components/FormField/InputField.vue';
import DialogError from '../../components/common/DialogError.vue';
import router from '../../router';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import {useUserStore} from '../../stores/user';
import {useDialog} from '../../hooks/useDialog';

export default defineComponent({
  props: {
    login: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const user = useUserStore();
    const {isVisible, showDialog, hideDialog} = useDialog();
    const title = ref('');
    const message = ref('');
    const {errors, defineField, handleSubmit} = useForm({
      validationSchema: toTypedSchema(
        yup.object({
          username: yup.string().required('Username is a required field'),
          password: yup
            .string()
            .required('Password is a required field')
            .min(6, 'Password must be at least 6 characters'),
        })
      ),
    });
    const [username, usernameAttrs] = defineField('username');
    const [password, passwordAttrs] = defineField('password');

    const handleLogin = handleSubmit(async () => {
      const response = await user.login(username.value, password.value);

      if (response.isLoggedIn) {
        props.login();
        hideDialog();
      } else {
        showDialog();
        title.value = 'Login Failed';
        message.value = 'Your username or password is incorrect';
      }
    });

    return {
      username,
      password,
      errors,
      handleLogin,
      visibleDialog: isVisible,
      title,
      message,
      hideDialog,
    };
  },
  components: {
    InputField,
    Button,
    Dialog,
    DialogError,
  },
});
</script>

<style scoped>
.login-form-wrapepr {
  width: 25%;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
