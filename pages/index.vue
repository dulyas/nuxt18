<script setup lang="ts">
import { IPost } from "../types/IPost";

const page: Ref<number> = ref(1);

const { pending, data } = await useLazyFetch<{
  length: number;
  posts: IPost[];
}>(`/api/posts?page=${page.value}`);

const onClickHandler = (newPage: number) => {
  page.value = newPage;
};

watch(page, async (newPage) => {
  pending.value = true;
  useLazyFetch<{ length: number; posts: IPost[] }>(
    `/api/posts?page=${newPage}`
  ).then(({ pending: newPending, data: newData }) => {
    pending.value = newPending.value;
    data.value = newData.value;
  });
});
</script>

<template>
  <div class="main">
    <div v-if="!pending">
      <div class="pages">
        <div
          @click="() => navigateTo(`/posts/${id}`)"
          class="card"
          v-for="{ title, subtitle, id } in data?.posts"
          :key="id"
        >
          <div class="title">{{ title }}</div>
          <div class="subtitle">{{ subtitle }}</div>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
    <vue-awesome-paginate
      v-if="data?.length"
      :total-items="data?.length"
      v-model="page"
      :items-per-page="5"
      :max-pages-shown="5"
      :on-click="onClickHandler"
    />
  </div>
</template>

<style lang="scss">
.main {
  margin-block-start: 15px;
  .card {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
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
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
