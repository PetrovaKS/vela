<script setup>
import { computed } from 'vue'
import { useHeaderStore } from '@/components/header/header.store'
import { useMenuStore } from '@/components/menu/menu.store'
import CartAmount from './CartAmount.vue'
import Search from './Search.vue'
import { HeartIcon, HunterIcon, ChestDarkIcon } from '@/components/icons/index'

const headerStore = useHeaderStore()
const menuStore = useMenuStore()

const windowWidth = computed(() => headerStore.screenWidth)
const height = computed(() => {
  return headerStore.scrollY > 100 || windowWidth.value < 1200 ? 100 : 146
})

const closeMobileMenu = () => {
  menuStore.setIsOpen(false)
  menuStore.setActiveTab('')
  menuStore.currentLevel = 0
  menuStore.currentPath = []
}
</script>

<template>
  <div class="header-light-mobile">
    <div class="header-light-mobile__row">
      <div class="header-light-mobile__icon-group">
        <div class="menu-opened-button" v-if="menuStore.mobileMenuIsOpen" @click="closeMobileMenu">
          <img src="/images/icons/x.svg" alt="close" />
        </div>

        <div class="button-accent-mobile" v-else @click="menuStore.setIsOpen(true)">
          <img src="/images/icons/menu-mobile.svg" alt="menu" />
        </div>

        <router-link to="#" class="mobile-icon">
          <HunterIcon />
        </router-link>
      </div>

      <img src="/images/icons/logo.svg" alt="logo" class="logo-mobile" />

      <div class="header-light-mobile__icon-group">
        <router-link to="#" class="mobile-icon">
          <HeartIcon />
        </router-link>
        <router-link to="#" class="mobile-icon">
          <ChestDarkIcon />
          <CartAmount />
        </router-link>
      </div>
    </div>
    <div class="header-light-mobile__row">
      <Search />
    </div>
  </div>
</template>

<style lang="scss">
.header-light-mobile {
  @include flex(start, center, column, 10px);
  padding: 10px 16px 0 16px;
  height: 146px;
  background-color: $color-white;

  .header-light-mobile__row {
    width: 100%;
    @include flex(space-between, center);

    .button-accent-mobile {
      @include flex(center, center);
      min-width: 40px;
      height: 40px;
      border: 1.25px solid $color-accent-blue;
      border-radius: 5px;
      background: $color-accent-blue;
    }

    .menu-opened-button {
      @include flex(center, center);
      border-radius: 5px;
      width: 40px;
      height: 40px;
      background: $color-secondary-button;
    }

    .header-light-mobile__icon-group {
      @include flex(center, center, row, 6px);

      .mobile-icon {
        @include flex(center, center);
        width: 40px;
        height: 40px;
        border: 0.83px solid $color-secondary-border;
        border-radius: 3px;
        position: relative;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .logo-mobile {
      width: 56px;
      height: 56px;
    }
  }
}
</style>
