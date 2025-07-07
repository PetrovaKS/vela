<script setup>
import { ArrowRightIcon } from '@/components/icons'
import { useMenuStore } from '@/components/menu/menu.store'
import { useRouter } from 'vue-router'

const menuStore = useMenuStore()
const router = useRouter()

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  hasNextLevel: {
    type: Boolean,
    required: true,
  },
  link: String,
  id: String,
})

const emit = defineEmits(['item-click'])

const handleClick = () => {
  if (!props.hasNextLevel && props.link) {
    router.push(props.link)
    menuStore.setIsOpen(false)
    menuStore.setActiveTab('')
    menuStore.currentLevel = 0
    menuStore.currentPath = []
  }
  if (props.hasNextLevel && props.id) {
    emit('item-click', props.id, props.label)
  }
}
</script>

<template>
  <div class="mobile-menu-item" @click="handleClick">
    <slot name="icon"></slot>
    <div class="main-text">{{ label }}</div>
    <ArrowRightIcon v-if="hasNextLevel" />
  </div>
</template>

<style lang="scss">
.mobile-menu-item {
  @include flex(start, center, row, 17px);
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background: $color-secondary;
  padding-left: 12px;
  padding-right: 14px;

  .main-text {
    flex: 1;
  }
}
</style>
