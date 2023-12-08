<!-- CommonInput.vue -->
<template>
  <div class="input-wrapper">
    <label :for="inputId" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :id="inputId"
      v-model="inputValue"
      class="input-field"
    />
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
  setup(props, {emit}) {
    const inputId = `input_${Math.random().toString(36).substring(2)}`;
    const propsX = toRef(props);
    const propsY = reactive(propsX);

    console.log('propsY', propsY);
    const inputValue = ref(props.value);
    const errorMessage = toRef(props.error);

    // Emit input changes
    watch(inputValue, (newValue) => {
      emit('update:value', newValue);
      console.log('sadas', newValue);
    });

    watch(
      () => props.error,
      (newError) => {
        errorMessage.value = newError;
      }
    );

    return {
      inputId,
      inputValue,
      showError: props.error !== '',
      errorMessage: props.error,
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
