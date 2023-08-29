<script setup lang="ts">
import { IPost } from "../../types/IPost";
import { useRoute } from "nuxt/app";

const {params: {id}} = useRoute()

const { pending, data: post } = await useLazyFetch<IPost>(`/api/posts/${id}`);

</script>

<template>
  <div class="post">
      <div v-if="pending">Loading</div>
      <div v-else-if="post">
        <h1 class="title">{{ post.title }}</h1>
        <h2 class="subtitle">{{ post.subtitle }}</h2>
        <div class="text">{{ post.text }}</div>
      </div>
  </div>
</template>

<style lang="scss">

.post {
  margin-block-start: 10px;
  .title {
    font-size: 40px;
  }
  .subtitle {
    margin-block-start: 5px;
    font-size: 25px;
  }
  .text {
    margin-block-start: 5px;
    font-size: 15px;
  }

}

</style>
