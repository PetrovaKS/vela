<script setup>
import { useMenuStore } from './menu.store'
import { computed } from 'vue'

const menuStore = useMenuStore()
const list = computed(() => menuStore.activeContent)

const handleClick = (item) => {
  if (item.link) router.push(item.link)
  menuStore.setIsOpen(false)
  menuStore.setActiveTab('')
  menuStore.currentLevel = 0
  menuStore.currentPath = []
}
</script>

<template>
  <div class="menu-desktop-one-level" v-if="list">
    <div
      v-for="(item, index) in list"
      :key="index"
      @click="handleClick(item)"
      class="main-text menu-item"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-desktop-one-level {
  @include flex(start, start, column, 16px);
  padding: 24px;
  min-width: 204px;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(157, 157, 157, 0.35);
  position: absolute;
  top: 66px;
  left: 0;

  .menu-item {
    color: $color-primary;

    &:hover {
      color: $color-accent-blue;
    }
  }
}
</style>
