<template>
  <header>
    <button><NuxtLink to="/">Main Page</NuxtLink></button>
    <button><NuxtLink to="/posts/create">Create Post</NuxtLink></button>
  </header>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss" global>
body,
html {
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

button {
  border: none;
  cursor: pointer;
}

header {
  width: 100%;
  height: 80px;
  background: blueviolet;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
