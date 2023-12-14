<template>
  <Header />
  <!-- <MarketTable /> -->
  <MarketTableAnt />
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Header from '../../components/common/Header.vue';
import MarketTable from './MarketTable.vue';
import MarketTableAnt from './MarketTableAnt.vue';
export default defineComponent({
  setup() {
    onMounted(() => {});

    return {};
  },
  components: {
    Header,
    MarketTable,
    MarketTableAnt,
  },
});
</script>
