<script setup>
import SocialLinks from '../../header/components/SocialLinks.vue'
import CreateComputerButton from '../../header/components/CreateComputerButton.vue'
import MenuMobileItem from './MenuMobileItem.vue'
import {
  FireIcon,
  LightningIcon,
  ChestIcon,
  QuestIcon,
  OrcIcon,
  CatalogIcon,
} from '@/components/icons/index'
import { useMenuStore } from '../menu.store'

const menuStore = useMenuStore()

const handleClick = (id, label) => {
  menuStore.setActiveTab(id)
  menuStore.currentLevel = 1
  menuStore.currentPath.push(label)
}
</script>

<template>
  <div class="menu-mobile">
    <div class="menu-mobile__contacts">
      <div class="contacts-info">
        <div class="contacts-info__group">
          <img src="/images/icons/location.svg" alt="location" />
          <div class="main-text">г.Москва</div>
        </div>
        <div class="contacts-info__group">
          <img src="/images/icons/watch.svg" alt="watch" />
          <div class="main-text">Ежедневно 9:00 — 21:00</div>
        </div>
      </div>
      <SocialLinks />
    </div>

    <div class="menu-mobile_list">
      <MenuMobileItem
        v-for="(item, index) in menuStore.tabs"
        :key="index"
        :label="item.title"
        :hasNextLevel="!!item.sections.length"
        :id="item.id"
        :link="item.link"
        @item-click="handleClick"
      >
        <template #icon>
          <component :is="item.icon" />
        </template>
      </MenuMobileItem>
    </div>

    <CreateComputerButton />
    <div class="menu-mobile_additional">
      <div class="menu-mobile_additiona__item main-text">Доставка</div>
      <div class="menu-mobile_additiona__item main-text">Оплата</div>
      <div class="menu-mobile_additiona__item main-text">Контакты</div>
    </div>
  </div>
</template>

<style lang="scss">
.menu-mobile {
  @include flex(start, center, column, 24px);
  padding: 8px 16px 36px 16px;
  width: 100%;
  min-height: calc(100dvh - 172px);
  background-color: $color-white;

  .menu-mobile__contacts {
    @include flex(space-between, end);
    width: 100%;

    .contacts-info {
      @include flex(start, start, column, 8px);

      .contacts-info__group {
        @include flex(start, center, row, 8px);
      }
    }
  }

  .menu-mobile_list {
    width: 100%;
    @include flex(start, start, column, 8px);
  }

  .menu-mobile_additional {
    @include flex(start, center, column, 8px);
    width: 100%;

    .menu-mobile_additiona__item {
      height: 47px;
      padding-bottom: 10px;
      @include flex(start, end);
      border-bottom: 1px solid $color-secondary-button;
      width: 100%;
    }
  }
}
</style>
