<template>
  <div class="container">
    <div class="section-header" :class="sideClass">
      <span class="section-name" :style="namePaddingDirection">{{ sectionNameUp }}</span>
      <hr />
    </div>
    <div class="slider">
      <div class="slider-controls" :style="sliderControlsFloatDirection">
        <div class="slider-controls__container">
          <div class="slider-controls__counter">
            <span class="current">{{ sliderCurrentPage }}</span>
            <span class="separator">/</span>
            <span class="total">{{ sliderTotalPages }}</span>
          </div>
          <div class="slider-controls__arrows">
            <i class="fas fa-angle-left" @click="sliderLeft"></i>
            <i class="fas fa-angle-right" @click="sliderRight"></i>
          </div>
        </div>
      </div>

      <div class="slider-items">
        <StoreSubSectionItem v-for="item in storeItems" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import StoreSubSectionItem from "./StoreSubSectionItem";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    side: {
      type: String,
      required: false,
      default: "left"
    },
    sectionName: {
      type: String,
      required: false,
      default: "section"
    }
  },
  data() {
    return {
      sliderCurrentPage: 1
    };
  },
  created() {
    this.fetchStoreItems({ collection: this.sectionName, limit: 3 });
  },
  methods: {
    ...mapActions(["fetchStoreItems"]),
    sliderLeft() {
      this.sliderCurrentPage -= 1;
    },
    sliderRight() {
      this.sliderCurrentPage += 1;
    }
  },
  computed: {
    sectionNameUp() {
      return this.sectionName.toUpperCase();
    },
    sideClass() {
      return this.side === "right" ? "right-side" : "left-side";
    },
    namePaddingDirection() {
      return this.side === "right"
        ? {
            "padding-left": "1.5rem"
          }
        : {
            "padding-right": "1.5rem"
          };
    },
    sliderControlsFloatDirection() {
      return this.side === "right"
        ? {
            justifyContent: "flex-start"
          }
        : {
            justifyContent: "flex-end"
          };
    },
    // Make a function name for fetching right store items (men, women)
    storeItems() {
      // Check if getter with this section name exists
      return this.$store.getters.getStoreItems(this.sectionName);
    },
    sliderTotalPages() {
      return Math.ceil(this.storeItems.length / 3);
    }
  },
  components: {
    StoreSubSectionItem
  }
};
</script>

<style scoped>
.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.section-header {
  display: flex;
}

.section-header.left-side {
  flex-direction: row;
}
.section-header.right-side {
  flex-direction: row-reverse;
}

.section-name {
  font-size: 1.5rem;
  font-weight: 500;
  flex-grow: 0;
}

hr {
  height: 2px;
  color: #ccc;
  flex-grow: 1;
  margin-top: 1.3rem;
}

.slider:after {
  content: "";
  display: table;
  clear: both;
}

.slider-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.slider-controls {
  display: flex;
  font-size: 1.2rem;
  color: #aa9b77;
  margin-bottom: 1.2rem;
}

.slider-controls__counter {
  width: 2rem;
  display: flex;
  justify-content: space-between;
}

.slider-controls__arrows {
  width: 2rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
}

i {
  cursor: pointer;
}

@media (max-width: 552px) {
  .slider-items {
    flex-direction: column;
  }
  .slider-items__item {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}
</style>
