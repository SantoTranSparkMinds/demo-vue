import {ref, Ref, computed} from 'vue';

export function useDialog(): {
  isVisible: Ref<boolean>;
  showDialog: () => void;
  hideDialog: () => void;
  toggleDialog: () => void;
} {
  const isVisible = ref(false);

  const showDialog = () => {
    isVisible.value = true;
  };

  const hideDialog = () => {
    isVisible.value = false;
  };

  const toggleDialog = () => {
    isVisible.value = !isVisible.value;
  };

  return {
    isVisible: computed(() => isVisible.value),
    showDialog,
    hideDialog,
    toggleDialog,
  };
}
