<script setup>
import { useHeaderStore } from '@/components/header/header.store'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="header-dark" v-show="headerStore.scrollY <= 100">
    <div class="container header-dark__container">
      <div class="header-dark__left">
        <div class="header-dark__group">
          <img src="/images/icons/location.svg" alt="location" />
          <a href="/" class="main-text-small header-text-small--padding main-text-hover"
            >Сайлент-Хилл</a
          >
        </div>
        <div class="header-dark__group">
          <img src="/images/icons/phone.svg" alt="location" />
          <a
            href="tel:+75555553750"
            class="main-text-small header-text-small--padding main-text-hover"
            >+7 555 555-37-50</a
          >
        </div>
      </div>

      <div class="header-dark__center">
        <div class="main-text-small header-text-small--padding">Ежедневно</div>
        <div class="main-text-small header-text-small--padding">9:00 - 21:00</div>
      </div>

      <div class="header-dark__right main-text-small header-text-small--padding">
        <router-link to="/" class="main-text-hover">Доставка</router-link>
        <router-link to="/" class="main-text-hover">Оплата</router-link>
        <router-link to="/" class="main-text-hover">Контакты</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-dark {
  width: 100%;
  height: 34px;
  background-color: $color-secondary;

  .header-dark__container {
    @include flex(space-between, center);
    padding: 0 40px 0 40px;
    height: 100%;

    @media screen and (max-width: 1440px) {
      padding: 0 20px 0 20px;
    }

    @media screen and (max-width: 1235px) {
      padding: 0 10px 0 10px;
    }
  }

  .header-dark__left {
    @include flex(start, center, row, 12px);

    .header-dark__group {
      @include flex(start, center, row, 4px);
    }
  }

  .header-dark__center {
    @include flex(center, center, row, 12px);
  }

  .header-dark__right {
    @include flex(end, center, row, 16px);
  }

  .header-text-small--padding {
    padding-top: 2px;
  }
}
</style>
