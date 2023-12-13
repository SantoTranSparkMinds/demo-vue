<template>
  <div class="card">
    <DataTable :value="products" class="custom-table">
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold">Products</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column class="w-1/6" field="name" header="Name"></Column>
      <Column class="w-1/6" header="Image">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="shadow-2 border-round rounded-full w-[40px] h-[40px]"
          />
        </template>
      </Column>
      <Column class="w-1/6" field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column class="w-1/6" field="category" header="Category"></Column>
      <Column class="w-1/6" field="rating" header="Reviews">
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.rating"
            readonly
            :cancel="false"
            class="flex gap-[10px]"
          />
        </template>
      </Column>
      <Column class="w-1/6" header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.inventoryStatus"
            :severity="getSeverity(slotProps.data)"
          />
        </template>
      </Column>
      <template #footer>
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

import {ProductService} from './ProductService';

export default {
  components: {
    DataTable,
    Button,
    Column,
    Rating,
    Tag,
  },
  setup() {
    const products = ref();

    onMounted(() => {
      ProductService.getProductsMini().then((data) => (products.value = data));
    });
    const formatCurrency = (value: number) => {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    };
    const getSeverity = (product: any) => {
      switch (product.inventoryStatus) {
        case 'INSTOCK':
          return 'success';

        case 'LOWSTOCK':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return undefined;
      }
    };

    return {
      products,
      formatCurrency,
      getSeverity,
    };
  },
};
</script>

<style scoped>
.card {
  margin-top: 80px;
  background: black;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.custom-table {
  /* Example: Modify the table's appearance */
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}
.p-datatable .p-column-header-content {
  /* Example: Style for column headers */
  justify-content: center;
  font-weight: bold;
}
</style>
