<script setup>
import { useHeaderStore } from '@/components/header/header.store'
import Localization from './Localization.vue'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="header-dark-mobile">
    <Localization />

    <div class="header-dark-mobile__phone-group">
      <img src="/images/icons/phone.svg" alt="location" />
      <a href="tel:+75555553750" class="main-text-small">+7 555 555-37-50</a>
    </div>
  </div>
</template>

<style lang="scss">
.header-dark-mobile {
  width: 100%;
  height: 26px;
  background-color: $color-secondary;
  padding: 0 16px;
  @include flex(space-between, center, row);

  .header-dark-mobile__phone-group {
    @include flex(end, center, row, 8px);
  }

  .main-text-small {
    padding-top: 2px;
  }
}
</style>
