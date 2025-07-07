<script setup>
import MenuMobileItem from './MenuMobileItem.vue'
import { useMenuStore } from '../menu.store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuStore = useMenuStore()

const currentItems = computed(() => menuStore.getCurrentItems)

const currentSectionTitle = computed(() => {
  if (menuStore.currentLevel === 0) return 'Каталог'
  return menuStore.currentPath[menuStore.currentPath.length - 1]
})

const hasNextLevel = (item) => !!item.sections && !!item.sections.length

const handleItemClick = (item) => {
  if (hasNextLevel(item)) {
    const nextLevelItems = item.sections
    const isOneChildrenElement =
      nextLevelItems.length === 1 &&
      nextLevelItems[0].sections &&
      nextLevelItems[0].sections.length > 0

    if (isOneChildrenElement) {
      menuStore.navigateToLevel(menuStore.currentLevel + 1, nextLevelItems[0].title)
    } else {
      menuStore.navigateToLevel(menuStore.currentLevel + 1, item.title)
    }
  }
  if (item.link) {
    router.push(item.link)
    menuStore.setIsOpen(false)
    menuStore.setActiveTab('')
    menuStore.currentLevel = 0
    menuStore.currentPath = []
  }
}

const goBack = () => {
  if (menuStore.currentLevel > 0) {
    const prevTitle = menuStore.currentPath[menuStore.currentPath.length - 2]
    menuStore.navigateToLevel(menuStore.currentLevel - 1, prevTitle)
  }
}
</script>

<template>
  <div class="menu-mobile-second-level">
    <div v-if="menuStore.currentLevel > 0" class="back-button">
      <img src="/images/icons/left.svg" alt="back" @click="goBack" />
      <div class="main-text">{{ currentSectionTitle }}</div>
    </div>

    <div class="menu-mobile_list">
      <MenuMobileItem
        v-for="(item, index) in currentItems"
        :key="index"
        :label="item.title"
        :link="item.link"
        :hasNextLevel="hasNextLevel(item)"
        @click="handleItemClick(item)"
      >
        <template #icon>
          <component :is="item.icon" v-if="item.icon" />
        </template>
      </MenuMobileItem>
    </div>
  </div>
</template>

<style lang="scss">
.menu-mobile-second-level {
  @include flex(start, center, column, 24px);
  padding: 0 16px 36px 16px;
  width: 100%;
  min-height: calc(100dvh - 172px);
  background-color: $color-white;

  .menu-mobile_list {
    width: 100%;
    @include flex(start, start, column, 8px);
  }

  .back-button {
    @include flex(start, center, row, 29px);
    width: 100%;
  }
}
</style>
