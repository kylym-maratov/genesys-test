<script setup lang="ts"></script>

<template>
  <button
    type="button"
    class="submit_button"
    :disabled="loading || disabled"
    @click="clickEvent()"
  >
    <div class="lds-ring" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span v-else>Создать</span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    disabled: Boolean,
    loading: Boolean,
    clickEvent: {
      type: Function,
      default: () => 0,
    },
  },
};
</script>

<style>
.submit_button {
  background: blue;
  border: none;
  outline: none;
  color: white;
  padding: 10px;
  width: 120px;
  cursor: pointer;
}

.submit_button:disabled {
  background: gainsboro;
  color: black;
  cursor: not-allowed;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
