<template>
  <Header />
  <ComponentOne />
  <ComponentTwo />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Header from './Header.vue';
import ComponentOne from './ComponentOne.vue';
import ComponentTwo from './ComponentTwo.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    Header,
    ComponentOne,
    ComponentTwo,
  },
});
</script>
