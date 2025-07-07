<script setup>
import { computed } from 'vue'
import { useHeaderStore } from '@/components/header/header.store'
import CartAmount from './CartAmount.vue'
import NavPanel from './NavPanel.vue'
import MenuDesktopButton from '@/components/menu/MenuDesktopButton.vue'
import Search from './Search.vue'
import SocialLinks from './SocialLinks.vue'
import CreateComputerButton from './CreateComputerButton.vue'
import Localization from './Localization.vue'
import { TgIcon, WaIcon, HeartIcon, HunterIcon, ChestDarkIcon } from '@/components/icons/index'

const headerStore = useHeaderStore()

const windowWidth = computed(() => headerStore.screenWidth)
const height = computed(() => {
  return headerStore.scrollY > 100 || windowWidth.value < 1200 ? 100 : 146
})
</script>

<template>
  <div
    :style="{ height: height + 'px' }"
    class="container header-light"
    :class="{ 'header-light--small': height == 100 }"
  >
    <img src="/images/icons/logo.svg" alt="logo" class="logo" />
    <div class="header-light__column header-light__column--center">
      <div class="header-light__row">
        <MenuDesktopButton />
        <Search />
        <SocialLinks />
      </div>
      <transition name="fade">
        <div class="header-light__row" v-show="height > 100">
          <NavPanel />
        </div>
      </transition>
    </div>
    <div class="header-light__column">
      <div class="header-light__row">
        <Localization />
      </div>
    </div>
    <div class="header-light__column">
      <div class="header-light__row account-icons">
        <router-link to="#" class="account-icons__item">
          <HeartIcon />
        </router-link>
        <router-link to="#" class="account-icons__item">
          <HunterIcon />
        </router-link>
        <router-link to="#" class="account-icons__item">
          <ChestDarkIcon />
          <CartAmount />
        </router-link>
      </div>
      <transition name="fade">
        <div class="header-light__row" v-show="height > 100">
          <CreateComputerButton />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.header-light {
  padding: 16px 40px 0 40px;
  transition: height 0.3s ease;
  @include flex(space-between, start, row, 35px);

  @media screen and (max-width: 1440px) {
    padding: 16px 20px 0 20px;
  }

  @media screen and (max-width: 1300px) {
    gap: 25px;
  }

  @media screen and (max-width: 1235px) {
    gap: 20px;
    padding: 16px 10px 0 10px;
  }

  .header-light__column {
    @include flex(start, space-between, column, 16px);

    .header-light__row {
      @include flex(space-between, center, row, 16px);
    }
  }

  .header-light__column--center {
    max-width: 900px;
    width: 100%;
  }

  .account-icons {
    gap: 16px !important;

    .account-icons__item {
      @include flex(center, center);
      border: 1px solid $color-secondary-border;
      border-radius: 4px;
      width: 48px;
      height: 48px;
      cursor: default;
      position: relative;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          svg > path,
          svg > g > path {
            transition: 0.3s;
            fill: $color-accent-blue;
          }
        }
      }
    }
  }
}

.header-light--small {
  padding-top: 0;
  align-items: center;
}
</style>
