<script setup>
import { TgIcon, WaIcon } from '@/components/icons/index'
import { useHeaderStore } from '../header.store'
import { computed } from 'vue'

const headerStore = useHeaderStore()

const socialLinksClass = computed(() => ({
  'social-links-mobile': headerStore.isMobile,
  'social-links-desktop': !headerStore.isMobile,
}))
</script>

<template>
  <div :class="socialLinksClass">
    <a href="#" class="social-links__item">
      <TgIcon />
    </a>
    <a href="#" class="social-links__item">
      <WaIcon />
    </a>
  </div>
</template>

<style lang="scss">
.social-links-desktop {
  @include flex(center, center, row, 10px);
  padding-left: 8px;

  .social-links__item {
    @include flex(center, center);
    border-radius: 4px;
    width: 48px;
    height: 48px;
    background-color: $color-secondary;
    transition: 0.3s;
    cursor: default;

    &:hover {
      background-color: $color-secondary-dark;

      svg > path {
        fill: $color-accent-blue;
      }
    }
  }
}

.social-links-mobile {
  @include flex(center, center, row, 6px);

  .social-links__item {
    @include flex(center, center);
    border-radius: 3px;
    width: 40px;
    height: 40px;
    background-color: $color-secondary;
    transition: 0.3s;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
