<script setup>
defineProps({
  label: String,
  link: String,
})
</script>

<template>
  <div class="button-nav">
    <slot name="icon"></slot>
    <div class="main-text button-nav__text">{{ label }}</div>
    <div class="hover-zone"></div>
    <slot name="menu"></slot>
  </div>
</template>

<style lang="scss">
.button-nav {
  @include flex(center, center, row, 10px);
  padding: 11px 16px;
  border-radius: 8px;
  background-color: $color-secondary;
  cursor: default;
  transition: 0.3s;
  position: relative;
  flex: 1 1 auto;

  .hover-zone {
    position: absolute;
    top: 100%;
    left: 0;
    height: 24px;
    width: 100%;
    pointer-events: auto;
  }

  .main-text {
    white-space: nowrap;
  }

  @media screen and (max-width: 1440px) {
    padding: 11px 13px;
  }

  @media screen and (max-width: 1360px) {
    .main-text {
      font-size: 14px;
    }
    padding: 11px 11px;
    gap: 8px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .button-nav__text {
        color: $color-accent-blue;
      }

      .button-menu-icon > path,
      .button-menu-icon > g > path {
        fill-opacity: 1;
        transition: 0.3s;
      }
    }
  }
}
</style>
