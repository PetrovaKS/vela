<script setup>
import { useHeaderStore } from '../header.store'
import { ref } from 'vue'

const headerStore = useHeaderStore()
const search = ref('')

const searchProducts = () => {
  // поиск
  search.value = ''
}
</script>

<template>
  <div class="search" v-if="!headerStore.isMobile">
    <input type="text" placeholder="Поиск товаров..." class="main-text" v-model="search" />
    <div class="button-search main-text-small-white" @click="searchProducts">Найти</div>
  </div>

  <div class="search-mobile" v-else>
    <input type="text" placeholder="Поиск товаров..." class="main-text-small" v-model="search" />
    <div class="button-search" @click="searchProducts">
      <img src="/images/icons/search.svg" alt="search" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @include flex(space-between, center, row, 16px);
  border: 1px solid rgba($color-accent-blue, 0.2);
  border-radius: 8px;
  max-width: 654px;
  width: 100%;
  height: 48px;
  padding-right: 3px;

  input {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    padding-left: 24px;
  }

  .button-search {
    @include flex(center, center);
    border-radius: 4px;
    max-width: 78px;
    width: 100%;
    height: 40px;
    background-color: $color-accent-blue;
  }
}

.search-mobile {
  @include flex(space-between, center, row, 16px);
  width: 100%;
  height: 46px;
  border: 1px solid rgba($color-accent-blue, 0.2);
  border-radius: 8px;
  padding-right: 2px;

  input {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    padding-left: 16px;
  }

  .button-search {
    @include flex(center, center);
    min-width: 40px;
    height: 40px;
    border: 1.25px solid $color-accent-blue;
    border-radius: 5px;
    background: $color-accent-blue;
  }
}
</style>
