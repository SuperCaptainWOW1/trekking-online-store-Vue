<template>
  <section id="filter">
    <div class="container d-flex justify-content-between">
      <div class="filter-controls">
        <FilterSectionControlsItem title="men" />
        <FilterSectionControlsItem title="women" />
        <FilterSectionControlsItem title="children" />
      </div>
      <div class="filter-button__show-all">
        <button @click="$store.dispatch('clearActiveSections')">See all products</button>
      </div>
    </div>
  </section>
</template>

<script>
import FilterSectionControlsItem from './FilterSectionControlsItem'

export default {
  name: 'FilterSection',
  components: {
    FilterSectionControlsItem
  }
};
</script>

<style>
#filter {
  background-color: #f5f6f7;
  display: flex;
}

.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-button__show-all {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 1.2rem 1.8rem;
  text-transform: uppercase;
  background-color: #aa9b77;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-weight: 500;
}

button:hover {
  background-color: rgba(170, 155, 119, 0.8);
}

.checkbox-label {
  text-transform: uppercase;
  margin-left: 0.5em;
  margin-bottom: 0;
  font-size: 1.3rem;
  font-weight: 700;
}

input[type="checkbox"] {
  display: none;
}

.checkbox-label {
  cursor: pointer;
}

.checkbox-label__text {
  transition: 0.2s;
}

/* #c4b286 */

.checkbox-label:hover > .checkbox-icon {
  border-color: #c4b286;
}

.checkbox-label:hover > .checkbox-label__text {
  opacity: 0.8;
}

.checkbox-label .checkbox-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  transition: 0.2s;
}
.checkbox-icon i {
  visibility: hidden;
  color: #aa9b77;
  font-size: 0.8em;
}

input[type="checkbox"]:checked + .checkbox-label .checkbox-icon i {
  visibility: visible;
}

input[type="checkbox"]:checked + .checkbox-label .checkbox-icon {
  border-color: #aa9b77;
}

@media (max-width: 576px) {
  .container {
    flex-direction: column;
  }
  .filter-controls {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5em;
    width: 100%;
  }
  .filter-controls__item {
    margin-bottom: 0.7em;
  }
  .filter-button__show-all {
    justify-content: center;
    width: 100%;
  }
  button {
    height: 4rem;
    width: 14rem;
  }
}

@media (max-width: 992px) {
  .filter-controls__item {
    margin-right: 0.8rem;
  }
}

@media (max-width: 768px) {
  .filter-controls__item {
    margin-right: 0.2rem;
  }
}

@media (max-width: 768px) and (min-width: 576px) {
  .checkbox-label {
    font-size: 1.2rem;
  }
}

@media (min-width: 992px) {
  .filter-controls__item {
    margin-right: 2rem;
  }
}
</style>
