<script setup lang="ts">
const { data } = await useFetch("/api/posts");
console.log(data.value);
</script>

<template>
  <div></div>
</template>

<style lang="scss"></style>
