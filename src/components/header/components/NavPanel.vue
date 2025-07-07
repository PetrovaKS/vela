<script setup>
import NavButton from '@/components/header/components/NavButton.vue'
import MenuDesktopOneLevel from '@/components/menu/MenuDesktopOneLevel.vue'
import MenuDesktopMultilevel from '@/components/menu/MenuDesktopMultilevel.vue'
import { FireIcon, LightningIcon, ChestIcon, QuestIcon, OrcIcon } from '@/components/icons/index'
import { useMenuStore } from '@/components/menu/menu.store'

const menuStore = useMenuStore()

const handleMouseEnter = (tab) => menuStore.setActiveTab(tab)
const handleMouseLeave = () => menuStore.setActiveTab('')
</script>

<template>
  <NavButton label="Акции">
    <template #icon>
      <FireIcon />
    </template>
  </NavButton>

  <NavButton label="Горячее предложение">
    <template #icon>
      <LightningIcon />
    </template>
  </NavButton>

  <NavButton
    label="Подарочные наборы"
    @mouseenter="handleMouseEnter('gifts')"
    @mouseleave="handleMouseLeave"
  >
    <template #icon>
      <ChestIcon />
    </template>
    <template #menu>
      <transition name="fade">
        <MenuDesktopMultilevel v-if="menuStore.activeTab === 'gifts'" />
      </transition>
    </template>
  </NavButton>

  <NavButton
    label="События"
    @mouseenter="handleMouseEnter('events')"
    @mouseleave="handleMouseLeave"
  >
    <template #icon>
      <QuestIcon />
    </template>
    <template #menu>
      <transition name="fade">
        <MenuDesktopOneLevel v-if="menuStore.activeTab === 'events'" />
      </transition>
    </template>
  </NavButton>

  <NavButton
    label="Наши бренды"
    @mouseenter="handleMouseEnter('brands')"
    @mouseleave="handleMouseLeave"
  >
    <template #icon>
      <OrcIcon />
    </template>
    <template #menu>
      <transition name="fade">
        <MenuDesktopOneLevel v-if="menuStore.activeTab === 'brands'" />
      </transition>
    </template>
  </NavButton>
</template>
