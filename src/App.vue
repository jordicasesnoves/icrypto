<template>
  <div id="app" class="flex">
    <AppDrawer />
    <router-view class="lg:ml-64 md:ml-0" />
  </div>
</template>

<script>
import AppDrawer from "./components/Sections/AppDrawer";
export default {
  name: "App",
  components: {
    AppDrawer
  }
};
</script>

<style>
:root {
  --text-color: #718096;
  --active-color: #3498db;
  --bg-color: #f2f3fb;
  --bg-accent-color: #e1e3ec;
}

body{
  color: var(--text-color);
}

.link,
.active {
  color: #3498db;
}

#app {
  font-family: "Cerebri Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
