<template>
  <LoginForm />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Header from './Header.vue';
import LoginForm from './LoginForm.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    Header,
    LoginForm,
  },
});
</script>
