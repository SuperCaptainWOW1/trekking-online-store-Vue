<template>
  <div id="app">
    <Header />
    <FilterSection />
    <StoreSection />
    <AboutUsSection />
    <SectionBetween />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import StoreSection from "./components/StoreSection";
import AboutUsSection from "./components/AboutUsSection";
import SectionBetween from "./components/SectionBetween";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    FilterSection,
    StoreSection,
    AboutUsSection,
    SectionBetween,
    Footer
  }
};
</script>

<style>
html,
body {
  font-family: "Quicksand", sans-serif !important;
  letter-spacing: 0.05rem;
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
