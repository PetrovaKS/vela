<script setup>
import { useHeaderStore } from '@/components/header/header.store'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="localization-mobile" v-if="headerStore.isMobile">
    <img src="/images/icons/lang.svg" alt="localization" class="localization-img" />
    <div></div>
    <div
      class="main-text-small"
      :style="{ opacity: headerStore.localization === 'RU' ? 1 : 0.4 }"
      @click="headerStore.setLocalization('RU')"
    >
      RU
    </div>
    <div class="separator"></div>
    <div
      class="main-text-small"
      :style="{ opacity: headerStore.localization === 'EN' ? 1 : 0.4 }"
      @click="headerStore.setLocalization('EN')"
    >
      EN
    </div>
  </div>

  <div class="localization-desktop" v-else>
    <img src="/images/icons/lang.svg" alt="localization" />
    <div></div>
    <div
      class="main-text"
      :style="{ opacity: headerStore.localization === 'RU' ? 1 : 0.4 }"
      @click="headerStore.setLocalization('RU')"
    >
      RU
    </div>
    <div class="separator"></div>
    <div
      class="main-text"
      :style="{ opacity: headerStore.localization === 'EN' ? 1 : 0.4 }"
      @click="headerStore.setLocalization('EN')"
    >
      EN
    </div>
  </div>
</template>

<style lang="scss">
.localization-desktop {
  @include flex(start, center, row, 3px);
  height: 48px;

  .separator {
    width: 1px;
    height: 12px;
    background-color: $color-primary;
  }
}

.localization-mobile {
  @include flex(start, center, row, 4px);
  height: 100%;

  .localization-img {
    width: 16px;
    height: 16px;
  }

  .separator {
    width: 1px;
    height: 12px;
    background-color: $color-primary;
  }
}
</style>
