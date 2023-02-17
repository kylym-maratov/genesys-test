<script setup lang="ts">
import SelectItem from "./components/SelectItem.vue";
</script>

<template>
  <main class="main">
    <SelectItem />
  </main>
</template>

<style>
.main {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  padding: 20px;
  max-height: 600px;
}
</style>
