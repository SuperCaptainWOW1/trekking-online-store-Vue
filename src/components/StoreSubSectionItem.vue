<template>
  <div class="slider-items__item" ref="storeItem" @click="setActiveItem($event)">
    <div class="slider-items__item__optionals">
      <div
        class="slider-items__item__optionals__sizes-list"
        v-if="item.optionals.sizes || item.optionals.volumes && item.optionals.volumes.length > 1"
      >
        <p
          class="slider-items__item__optionals__sizes-list__header"
          :style="sizesListHeaderColor"
          @click="onShowOptionals"
        >
          {{size}}
          <i class="fas fa-chevron-down"></i>
        </p>
        <ul v-if="showOptionals" class="slider-items__item__optionals__sizes-list__items">
          <li
            v-for="sizeItem of item.optionals.sizes || item.optionals.volumes"
            :key="sizeItem"
            @click="onChooseSize($event)"
          >{{ sizeItem }}</li>
        </ul>
      </div>

      <span
        v-else
        class="slider-items__item__optionals__sizes-line"
      >{{ item.optionals.volumes[0]}} litres</span>

      <ul class="slider-items__item__optionals__colors" v-if="item.optionals.colors">
        <li
          class="slider-items__item__optionals__colors_item"
          v-for="colorItem of item.optionals.colors"
          :key="colorItem"
          :style="{ 'background-color': colorItem }"
          @click="onActiveColor($event)"
        ></li>
      </ul>
    </div>

    <img :src="item.image" :alt="item.name" class="slider-items__item__image" />

    <div class="slider-items__item__info">
      <div class="slider-items__item__info__name">{{ item.name }}</div>
      <div class="slider-items__item__info__price">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showOptionals: false,
      size: "size",
      // Maybe cut out
      activeStoreItem: "",
      // -
      activeColorItem: false
    };
  },
  methods: {
    ...mapGetters(["getActiveStoreItem"]),
    ...mapActions(["setActiveStoreItem"]),
    onShowOptionals() {
      this.showOptionals = !this.showOptionals;
    },
    onChooseSize(e) {
      this.size = e.target.innerText;
      this.showOptionals = false;
    },
    onActiveColor(e) {
      if (this.activeColorItem) {
        this.activeColorItem.style.border = "none";
      }
      this.activeColorItem = e.target;
      if (this.activeColorItem.style.backgroundColor == "black") {
        this.activeColorItem.style.border = "2px solid #aa9b77";
      } else {
        this.activeColorItem.style.border = "2px solid #000";
      }
    },
    setActiveItem(e) {
      let currentActive = this.getActiveStoreItem();

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      currentActive = this.$refs.storeItem;
      currentActive.classList.add("active");
      this.setActiveStoreItem(currentActive);
    }
  },
  computed: {
    sizesListHeaderColor() {
      return this.showOptionals ? "#aa9b77" : "#424242";
    }
  }
};
</script>

<style>
.slider-items__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 23rem;
  background-color: #f5f6f7;
  padding: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
}

.slider-items__item:not([class~="active"]):hover {
  padding: 0.8rem;
  border: 0.4rem solid #aa9b77;
  transition: 0.2s;
}

.slider-items__item.active {
  border: 0.4rem solid #aa9b77;
  padding: 0.8rem;
}

.slider-items__item__optionals {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-items__item__optionals__colors {
  display: flex;
  list-style: none;
  margin: 0;
  /* width: 7rem; */
}

.slider-items__item__optionals__colors_item {
  margin-left: 0.25rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  cursor: pointer;
}

.slider-items__item__image {
  max-height: 60%;
  max-width: 60%;
  cursor: pointer;
}

.slider-items__item__info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.2rem;
}

.slider-items__item__info__name {
  color: #aa9b77;
  cursor: pointer;
}

.slider-items__item__info__price {
  color: #424242;
}

.slider-items__item__optionals__sizes-list {
  position: relative;
}

.slider-items__item__optionals__sizes-list__header {
  margin-bottom: 0.3rem;
  color: #424242;
  cursor: pointer;
  transition: 0.2s;
}

.slider-items__item__optionals__sizes-list__header:hover {
  color: #aa9b77;
}

.slider-items__item__optionals__sizes-list__items {
  position: absolute;
  list-style: none;
  padding: 0;
}

.slider-items__item__optionals__sizes-list__items li {
  cursor: pointer;
  width: 30px;
  border-bottom: 1px solid #424242;
}

.slider-items__item__optionals__sizes-list__items li:hover {
  opacity: 0.5;
}

@media (max-width: 992px) {
  .slider-items__item__info {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .slider-items__item__image {
    max-height: 50%;
  }
  .slider-items__item__info {
    font-size: 1rem;
  }
  .slider-items__item {
    padding: 1rem;
  }
  .slider-items__item__optionals__sizes {
    font-size: 0.85rem;
  }
  .slider-items__item__optionals__colors_item {
    width: 1.1rem;
    height: 1.1rem;
  }
}

@media (max-width: 552px) {
  .slider-items__item__optionals,
  .slider-items__item__info {
    font-size: 1.4rem;
  }
}
</style>
