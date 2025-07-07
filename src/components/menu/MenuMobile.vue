<script setup>
import MenuMobileFirstLevel from './components/MenuMobileFirstLevel.vue'
import MenuMobileSecondLevel from './components/MenuMobileSecondLevel.vue'
import { useMenuStore } from './menu.store'
import { computed } from 'vue'

const menuStore = useMenuStore()
const menuFirst = computed(() => menuStore.activeTab === '')
</script>

<template>
  <transition name="fade" mode="out-in">
    <MenuMobileFirstLevel v-if="menuFirst" />
    <MenuMobileSecondLevel v-else />
  </transition>
</template>

<style lang="scss">
.menu-mobile {
  @include flex(start, center, column, 24px);
  padding: 8px 16px 36px 16px;
  width: 100%;
  min-height: calc(100dvh - 172px);
  background-color: $color-white;
}
</style>
