<script setup>
import { useHeaderStore } from '@/components/header/header.store'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="cart-amount main-text-small-white">{{ headerStore.cartAmount }}</div>
</template>

<style lang="scss" scoped>
.cart-amount {
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: $color-accent-blue;
  @include flex(center, center);
  position: absolute;
  top: -11px;
  right: -11px;

  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
    top: -10px;
    right: -4px;
  }
}

.main-text-small-white {
  font-size: 13px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
}
</style>
