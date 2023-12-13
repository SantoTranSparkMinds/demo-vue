<template>
  <Dialog
    v-model:visible="visibleDialog"
    modal
    :closable="false"
    :style="{width: '25rem'}"
    class="rounded-2xl bg-[#7d7c7c] px-[20px] py-[40px]"
  >
    <p class="text-2xl font-bold text-center mb-[20px]">{{ title }}</p>
    <p class="text-lg font-normal text-center">{{ message }}</p>
    <template #footer>
      <div class="text-center w-full">
        <Button
          label="Ok"
          class="h-[42px] rounded-lg bg-[#4759f9] w-2/4 mt-[20px] hover:opacity-80 focus:outline-none"
          @click="handleOnClose()"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {onMounted, defineComponent} from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    visibleDialog: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, {emit}) {
    console.log('props', props.message);
    onMounted(() => {});
    const handleOnClose = () => {
      emit('onCancelDialog');
    };

    return {handleOnClose};
  },
  components: {
    Button,
    Dialog,
  },
});
</script>

<style scoped></style>
