<template>
  <div id="app">
    <Header />
    <FilterSection />
    <StoreSection />
  </div>
</template>

<script>
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import StoreSection from "./components/StoreSection";

export default {
  name: "app",
  components: {
    Header,
    FilterSection,
    StoreSection
  }
};
</script>

<style>
html,
body {
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
}

@media (max-width: 768px) {
  html,
  body {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  html,
  body {
    font-size: 12px;
  }
}
</style>
