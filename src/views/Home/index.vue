<template>
  <Header />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Header from '../../components/common/Header.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    Header,
  },
});
</script>
