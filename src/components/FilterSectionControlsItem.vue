<template>
  <div class="filter-controls__item">
    <input 
      @click="$store.dispatch('toggleActiveSection', title)" 
      :id="`filter_${title}`" 
      type="checkbox" 
      :value="title" 
      :checked="checked"
    />
    <label :for="`filter_${title}`" class="checkbox-label d-flex align-items-center">
      <span class="checkbox-icon">
        <i class="fas fa-check"></i>
      </span>
      <span class="checkbox-label__text ml-2">{{ title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FilterSectionControlsItem',
  props: {
    title: String
  },
  computed: {
    checked() {
      const activeSections = this.$store.getters.getActiveSections;
      const activeSectionsArray = Array.from(activeSections);

      return activeSectionsArray.length !== 0 && activeSectionsArray.includes(this.title);
    }
  }
}
</script>