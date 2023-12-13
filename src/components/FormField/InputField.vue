<!-- CommonInput.vue -->
<template>
  <div class="input-wrapper">
    <label :for="inputId" class="input-label">{{ label }}</label>
    <input
      :id="inputId"
      class="input-field"
      :placeholder="placeholderRef"
      :value="modelValue"
      @input="updateInputValue"
    />
    <p v-if="showError" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import {ref, toRef} from 'vue';

export default {
  props: {
    modelValue: String,
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup(props, {emit}) {
    const inputId = 'input_${Math.random().toString(36).substring(2)}';
    const errorRef = toRef(props, 'error');
    const placeholderRef = ref(props.placeholder);

    const updateInputValue = (event: any) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      inputId,
      placeholderRef,
      showError: errorRef.value !== '',
      errorMessage: errorRef,
      updateInputValue,
    };
  },
};
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 15px;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333333;
}

.input-field {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #fafafa;
  opacity: 1;
  color: #000000;
}
.input-field:focus {
  outline: none;
  opacity: 0.8;
}
.input-field:hover {
  opacity: 0.8;
}

.error-message {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}
</style>
