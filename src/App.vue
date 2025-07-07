<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
import { useHeaderStore } from '@/components/header/header.store'
import { useMenuStore } from '@/components/menu/menu.store'
import Header from './components/header/Header.vue'
import MenuMobile from './components/menu/MenuMobile.vue'

const headerStore = useHeaderStore()
const menuStore = useMenuStore()

const handleScroll = () => {
  headerStore.setHeaderHeight(window.scrollY)
}

const checkScreenWidth = () => {
  headerStore.setIsMobile()
  headerStore.setScreenWidth()
  handleScroll()
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkScreenWidth)
})
</script>

<template>
  <Header></Header>
  <div :style="{ height: headerStore.height + 'px' }"></div>

  <main>
    <MenuMobile v-if="menuStore.mobileMenuIsOpen" />
    <RouterView v-else />
  </main>
</template>

<style lang="scss">
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  z-index: 5;
}

.fade-enter-active {
  transition: opacity 0.4s ease;
  transition-delay: 0.1s;
}

.fade-enter-from {
  opacity: 0;
  transition-delay: 0.1s;
}

html {
  scroll-behavior: smooth;
  scrollbar-color: rgba($color-primary, 0.5) transparent;
  scrollbar-width: thin;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  @media screen and (max-width: 768px) {
    scrollbar-width: none;
  }
}

html,
body {
  -webkit-overflow-scrolling: touch;

  @supports (-webkit-overflow-scrolling: touch) {
    transform: translate3d(0, 0, 0);
  }
}
</style>
