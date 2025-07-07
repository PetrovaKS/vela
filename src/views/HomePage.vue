<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHeaderStore } from '@/components/header/header.store'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="main-banner">
    <div class="gamepad-wrapper">
      <img :src="'/images/gamepad 1.png'" alt="gamepad" class="gamepad" />
    </div>
    <div class="container main-banner__container">
      <div class="main-banner__content">
        <div class="title-text">
          Отправляйся<br />
          в приключения с нашими<br />
          эпическими лут-корзинами<br />
          и наборами!
        </div>
        <div class="description-text">
          Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень
          мастерства! С нашей поддержкой каждое твое действие станет частью великого искусства, а
          победы — результатом точного плана и безупречной подготовки!
        </div>
        <router-link to="#" class="catalog-button accent-purple-text"> В каталог </router-link>
      </div>
    </div>
  </div>
  <div class="main-page-content main-text">остальной контент ...</div>
</template>

<style lang="scss">
.main-banner {
  width: 100%;
  background: $color-bg-gradient;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 439px;

  @media screen and (max-width: 1024px) {
    height: calc(100dvh - 172px);
    background: $color-bg-gradient-mobile;
  }

  .gamepad-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    height: 100%;
    width: 566px;
    z-index: 4;

    @media screen and (max-width: 1440px) {
      width: 40%;
    }

    @media screen and (max-width: 1200px) {
      width: 35%;
    }

    @media screen and (max-width: 1024px) {
      width: 50%;
    }

    .gamepad {
      position: absolute;
      top: -100px;
      right: -200px;
      width: 767px;
      height: 706px;

      @media screen and (max-width: 1440px) {
        top: 0;
        left: 0;
      }

      @media screen and (max-width: 1200px) {
        width: 600px;
        height: 540px;
        top: 15%;
      }

      @media screen and (max-width: 1024px) {
        width: 767px;
        height: 706px;
        top: 50%;
      }

      @media screen and (max-width: 600px) {
        width: 397px;
        height: 365px;
        bottom: -93px;
        top: auto;
      }
    }
  }

  .main-banner__container {
    height: 100%;
  }

  .main-banner__content {
    padding-left: 100px;
    height: 100%;
    width: 100%;
    max-width: 740px;
    @include flex(center, start, column, 26px);

    .title-text br {
      display: none;
    }

    @media screen and (max-width: 1440px) {
      padding-left: 80px;
    }

    @media screen and (max-width: 1200px) {
      padding-left: 60px;
      max-width: 60%;
    }

    @media screen and (max-width: 1024px) {
      padding-top: 150px;
      max-width: 70%;
      justify-content: start;

      .description-text {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        -webkit-line-clamp: 3;
        -moz-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    @media screen and (max-width: 600px) {
      padding: 32px 16px 0 16px;
      max-width: 360px;
      justify-content: start;
      gap: 14px;

      .title-text br {
        display: inline;
      }

      // .description-text {
      //   display: -webkit-box;
      //   display: -moz-box;
      //   display: box;
      //   -webkit-line-clamp: 3;
      //   -moz-line-clamp: 3;
      //   line-clamp: 3;
      //   -webkit-box-orient: vertical;
      //   -moz-box-orient: vertical;
      //   box-orient: vertical;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      // }
    }

    .catalog-button {
      border-radius: 8px;
      padding: 16px 40px;
      background: $color-white;
      cursor: default;

      @media screen and (max-width: 1024px) {
        margin-top: 6px;
      }
    }
  }
}

.main-page-content {
  background-color: $color-secondary;
  min-height: 1000px;
  padding-top: 50px;
  text-align: center;
}
</style>
