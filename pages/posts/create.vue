<script setup lang="ts">
const title = ref("");
const subtitle = ref("");
const text = ref("");
const success = ref("");
const error = ref("");
const loading = ref(false);

const sendData = async () => {
  if (!title.value || !subtitle.value || !text.value) {
    error.value = "Заполните все поля";
    return setTimeout(() => (error.value = ""), 1000);
  }

  loading.value = true;

  const { data } = await useLazyFetch<{ success: boolean }>(`/api/posts`, {
    method: "POST",
    body: {
      title: title.value,
      subtitle: subtitle.value,
      text: text.value,
    },
  });



  if (data.value?.success) {
    success.value = "Успешно";
    title.value = "";
    subtitle.value = "";
    text.value = "";
  }

  loading.value = false;
};
</script>

<template>
  <div class="form">
    <div v-if="loading">Loading</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <label>
      <div class="label">Title</div>
      <input v-model="title" type="text"
    /></label>
    <label>
      <div class="label">Subtitle</div>
      <input v-model="subtitle" type="text"
    /></label>
    <label>
      <div class="label">Text</div>
      <textarea v-model="text"></textarea>
    </label>
    <button @click="sendData">Send</button>
  </div>
</template>

<style lang="scss">
.form {
  margin-block-start: 20px;
  max-width: 500px;
  display: block;
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  label {
    display: block;
    width: 100%;
    input,
    textarea {
      resize: none;
      width: 100%;
    }
    .label {
      width: 300px;
    }
  }
}
</style>
