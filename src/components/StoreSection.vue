<template>
  <section id="products">
    <div v-if="!emptySection">
      <StoreSubSection side="left" sectionName="men" />
      <StoreSubSection side="right" sectionName="women" />
    </div>

    <h2 v-else>Sorry, we couldn't find any products.</h2>
  </section>
</template>

<script>
import StoreSubSection from "./StoreSubSection";

export default {
  name: 'StoreSection',
  computed: {
    emptySection() {
      const activeSections = this.$store.getters.getActiveSections;
      const activeSectionsArray = Array.from(activeSections);

      return activeSectionsArray.length === 1 && activeSectionsArray.includes('children');
    }
  },
  components: {
    StoreSubSection
  }
};
</script>

<style scoped>
#products {
  background-color: #fff;
  min-height: 100px;
  padding-bottom: 5rem;
}

h2 {
  text-align: center;
  margin-top: 5rem;
}
</style>
