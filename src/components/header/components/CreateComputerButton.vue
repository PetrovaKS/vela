<script setup>
import { PlusIcon } from '@/components/icons/index'
import { useHeaderStore } from '../header.store'
import { computed } from 'vue'

const headerStore = useHeaderStore()

const createComputerClass = computed(() => ({
  'create-computer-mobile': headerStore.isMobile,
  'create-computer-desktop': !headerStore.isMobile,
}))
</script>

<template>
  <router-link to="/" :class="createComputerClass">
    <PlusIcon />
    <div class="accent-blue-text">Собрать компьютер</div>
  </router-link>
</template>

<style lang="scss">
.create-computer-desktop {
  @include flex(center, center, row, 7px);
  border-radius: 8px;
  width: 176px;
  height: 42px;
  background-color: $color-secondary;
  transition: 0.3s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: $color-accent-blue;

      .accent-blue-text {
        color: $color-white;
      }

      svg > path {
        transition: 0.3s;
        stroke: $color-white;
      }
    }
  }
}

.create-computer-mobile {
  @include flex(center, center, row, 10px);
  border-radius: 8px;
  width: 100%;
  height: 48px;
  background-color: $color-secondary;
}
</style>
