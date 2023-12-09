<template>
  <LoginContainer />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import LoginContainer from './LoginContainer.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    LoginContainer,
  },
});
</script>
