<template>
  <section id="products">
    <StoreSubSection side="left" sectionName="men" />
    <StoreSubSection side="right" sectionName="women" />
  </section>
</template>

<script>
import StoreSubSection from "./StoreSubSection";

export default {
  components: {
    StoreSubSection
  }
};
</script>

<style scoped>
#products {
  background-color: #fff;
  min-height: 100px;
}
</style>
