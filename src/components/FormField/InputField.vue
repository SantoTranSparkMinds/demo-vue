<!-- CommonInput.vue -->
<template>
  <div class="input-wrapper">
    <label :for="inputId" class="input-label">{{ label }}</label>
    <input :type="type" :id="inputId" :value="inputRef" class="input-field" />
    <p v-if="showError" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import {ref, watch, toRef, reactive} from 'vue';

export default {
  props: {
    label: {
      type: String,
      required: true,
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
  emits: ['update:value'],
  setup(props, {emit}) {
    const inputId = `input_${Math.random().toString(36).substring(2)}`;
    const inputRef = toRef(props, 'value');
    const errorRef = toRef(props, 'error');

    // Emit input changes
    // watch(inputRef, (newValue) => {
    //   emit('update:value', newValue);
    // });
    // Emit input changes
    // const updateValue = (value) => {
    //   console.log(value);
    //   inputRef.value = value;
    //   emit('update:value', value);
    // };

    // Watch for changes in the error prop
    watch(
      () => props.error,
      (newError) => {
        errorRef.value = newError;
      }
    );

    return {
      inputId,
      inputRef,
      showError: errorRef !== '',
      errorMessage: errorRef,
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
}

.input-field {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}
</style>
