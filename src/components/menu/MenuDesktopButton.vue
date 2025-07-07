<script setup>
import MenuDesktopMultilevel from '@/components/menu/MenuDesktopMultilevel.vue'
import { useMenuStore } from '@/components/menu/menu.store'
import { useHeaderStore } from '../header/header.store'
import { computed } from 'vue'

const menuStore = useMenuStore()
const headerStore = useHeaderStore()

const handleMouseEnter = (tab) => menuStore.setActiveTab(tab)
const handleMouseLeave = () => menuStore.setActiveTab('')

const topOffset = computed(() =>
  headerStore.scrollY > 100 || headerStore.screenWidth <= 1200 ? 73 : 129,
)
</script>

<template>
  <div class="button-menu" @mouseenter="handleMouseEnter('catalog')" @mouseleave="handleMouseLeave">
    <img src="/images/icons/menu.svg" alt="menu" />
    <div class="hover-zone-menu" v-if="menuStore.activeTab === 'catalog'"></div>
    <transition name="fade">
      <MenuDesktopMultilevel
        v-if="menuStore.activeTab === 'catalog'"
        :top="+topOffset"
        :left="Number(0)"
      />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.button-menu {
  @include flex(center, center);
  border: 1px solid $color-accent-blue;
  border-radius: 8px;
  width: 101px;
  height: 48px;
  background: $color-accent-blue;
  position: relative;
}

.hover-zone-menu {
  position: absolute;
  top: 100%;
  left: 0;
  height: 83px;
  width: 100%;
  pointer-events: auto;
  z-index: 110;
}
</style>
