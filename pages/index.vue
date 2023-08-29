<script setup lang="ts">
import { IPost } from "../types/IPost";

const { data: db } = await useFetch<IPost[]>("/api/posts");
</script>

<template>
  <div v-if="db" class="main">
    <div class="pages">
      <div class="card" v-for="{ title, subtitle, id } in db" :key="id">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  margin-block-start: 15px;
  .card {
    border: 1px solid black;
    padding: 5px;
    .title {
      font-size: 20px;
    }
    .subtitle {
      font-size: 15px;
    }
    &:not(:first-child) {
      margin-block-start: 5px;
    }
  }
}
</style>
