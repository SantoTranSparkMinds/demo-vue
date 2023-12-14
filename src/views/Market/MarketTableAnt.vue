<template>
  <div class="table-wrapper">
    <a-table
      :columns="columns"
      :data-source="data"
      class="market-table"
      :pagination="false"
    >
      <template #bodyCell="{column, record}">
        <template v-if="column.dataIndex === 'crypto'">
          <div class="flex gap-[10px] items-center justify-left pl-[50px]">
            <img :src="assetImg" alt="" class="w-[36px] h-[36px]" />
            <div class="flex flex-col gap-[5px]">
              <span class="font-semibold">{{ record.assetSN }}</span>
              <span class="font-normal">{{ record.assetFN }}</span>
            </div>
          </div>
        </template>
        <template v-if="column.dataIndex === 'chart'">
          <div class="flex items-center justify-center">
            <img :src="graphChart" alt="" class="h-[50px]" />
          </div>
        </template>
        <template v-if="column.dataIndex === 'action'">
          <a-button
            class="outline-none focus:outline-none"
            @click="onClick(record)"
            >Default</a-button
          >
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import {Table} from 'ant-design-vue';
import {Button} from 'ant-design-vue';
import assetImg from '../../assets/images/asset_img.png';
import graphChart from '../../assets/images/graph_chart.png';

export default {
  components: {
    ATable: Table, // Register imported component locally
    AButton: Button, // Register imported component locally
  },
  setup() {
    const columns = [
      {
        title: 'Crypto',
        dataIndex: 'crypto',
        width: '20%',
        className: 'text-center',
      },
      {
        title: 'Chart',
        dataIndex: 'chart',
        className: 'text-center',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        className: 'text-center',
      },
      {
        title: 'Change 24h.',
        dataIndex: 'change',
        className: 'text-center',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        className: 'text-center',
      },
    ];

    const data = [
      {
        key: '1',
        assetImg: 'BTC',
        assetSN: 'BTC',
        assetFN: 'Bitcoin',
        chart: 'Chart',
        price: '123,123.00',
        change: '10%',
        action: 'Action',
      },
      {
        key: '2',
        assetImg: 'BTC',
        assetSN: 'ETH',
        assetFN: 'Ethereum',
        chart: 'Chart',
        price: '123,123.00',
        change: '10%',
        action: 'Action',
      },
      {
        key: '3',
        assetImg: 'BCH',
        assetSN: 'BCH',
        assetFN: 'Bitcoin Cash',
        chart: 'Chart',
        price: '123,123.00',
        change: '10%',
        action: 'Action',
      },
    ];

    const onClick = (record: any) => {
      console.log('Do somethings', record);
    };

    return {
      columns,
      data,
      assetImg,
      graphChart,
      onClick,
    };
  },
};
</script>

<style>
.table-wrapper {
  width: 100%;
  margin: 0 auto;
  /* margin-top: 100px; */
  padding: 20px;
  background-color: #000;
}
.market-table {
  width: 80%;
  margin: 0 auto;
}
.market-table .ant-table-cell {
  border: none;
  border-bottom: none !important;
}
.market-table .ant-table-cell::before {
  display: none !important;
}

.text-center {
  text-align: center !important;
}
</style>
