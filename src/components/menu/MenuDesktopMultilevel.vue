<script setup>
import { useMenuStore } from './menu.store'
import { computed, onMounted, ref } from 'vue'
import { ArrowRightIcon } from '@/components/icons'
import { useRouter } from 'vue-router'

defineProps({
  top: Number,
  left: Number,
})

const menuStore = useMenuStore()
const router = useRouter()

const list = computed(() => menuStore.activeContent)

const activePoint = ref(0)
const setActivePoint = (index) => {
  activePoint.value = index
}

const handleClick = (item) => {
  if (item.link) router.push(item.link)
  menuStore.setIsOpen(false)
  menuStore.setActiveTab('')
  menuStore.currentLevel = 0
  menuStore.currentPath = []
}

onMounted(() => {
  setActivePoint(0)
})
</script>

<template>
  <div class="menu-desktop-multi-level" v-if="list" :style="{ top: `${top}px`, left: `${left}px` }">
    <div class="menu-desktop-multi-level__list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="menu-item"
        @mouseenter="setActivePoint(index)"
        :class="{ 'menu-item--active': activePoint === index }"
      >
        <component :is="item.icon" />
        <div class="main-text">{{ item.title }}</div>
        <ArrowRightIcon v-if="item.sections.length" />
      </div>
    </div>

    <div
      class="menu-desktop-multi-level__active-list"
      v-for="(section, index) in list[activePoint].sections"
      :key="index"
    >
      <div class="main-text-title">{{ section.title }}</div>
      <div
        v-for="(item, index) in section.sections"
        :key="index"
        @click="handleClick(item)"
        class="active-list__item"
      >
        <div class="main-text">
          {{ item.title }} <span class="main-text--opacity">{{ item.quantity }}</span>
        </div>
        <ArrowRightIcon v-if="item.sections" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.menu-desktop-multi-level {
  @include flex(start, start, row, 40px);
  padding-top: 30px;
  padding-bottom: 22px;
  min-width: 757px;
  min-height: 353px;
  border-radius: 8px;
  background-color: $color-white;
  box-shadow: 0 0 10px 0 rgba(157, 157, 157, 0.35);
  position: absolute;
  top: 66px;
  left: -252px;

  .menu-desktop-multi-level__list {
    @include flex(start, start, column, 6px);
    width: 338px;

    .menu-item {
      @include flex(space-between, center, row, 16px);
      padding-left: 30px;
      padding-right: 20px;
      border-bottom: 1px solid $color-secondary-background;
      width: 100%;
      height: 50px;

      .main-text {
        flex: 1;
      }
    }

    .menu-item--active {
      background-color: $color-secondary-background;

      .arrow-right-icon > path {
        stroke: $color-accent-blue !important;
        stroke-opacity: 0.5;
        stroke-width: 2;
      }

      .menu-list-icon > path,
      .menu-list-icon > g > path {
        fill-opacity: 1;
      }
    }
  }

  .menu-desktop-multi-level__active-list {
    @include flex(space-between, start, column, 16px);
    transition: 0.2s;
    min-width: 215px;

    .active-list__item {
      width: 100%;
      @include flex(space-between, center);
    }

    .active-list__item:hover {
      .main-text {
        color: $color-accent-blue;
      }

      .arrow-right-icon > path {
        stroke: $color-accent-blue !important;
        stroke-opacity: 0.5;
        stroke-width: 2;
      }

      .main-text--opacity {
        opacity: 1;
      }
    }

    .main-text-title {
      padding-bottom: 15px;
    }

    .main-text--opacity {
      opacity: 0.5;
    }
  }
}
</style>
