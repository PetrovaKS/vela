<script setup>
import { useHeaderStore } from '@/components/header/header.store'
import HeaderDark from './components/HeaderDark.vue'
import HeaderLight from './components/HeaderLight.vue'
import HeaderDarkMobile from './components/HeaderDarkMobile.vue'
import HeaderLightMobile from './components/HeaderLightMobile.vue'

const headerStore = useHeaderStore()
</script>

<template>
  <header>
    <HeaderDark v-if="!headerStore.isMobile" />
    <HeaderLight v-if="!headerStore.isMobile" />
    <HeaderDarkMobile v-if="headerStore.isMobile" />
    <HeaderLightMobile v-if="headerStore.isMobile" />
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: $color-white;
  z-index: 100;
}
</style>
