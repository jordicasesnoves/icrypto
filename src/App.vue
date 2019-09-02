<template>
  <div id="app">
    <AppDrawer />
    <router-view />
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

.transition-normal{
  transition: all 0.3s;
}

.transition-fast{
  transition: all 0.1s;
}

.transition-slow{
  transition: all 1s;
}
</style>
