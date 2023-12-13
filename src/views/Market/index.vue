<template>
  <Header />
  <MarketTable />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Header from '../../components/common/Header.vue';
import MarketTable from './MarketTable.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    Header,
    MarketTable,
  },
});
</script>
