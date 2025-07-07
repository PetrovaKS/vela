import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header-store', {
  state: () => ({
    height: 180,
    scrollY: 0,
    localization: 'RU',
    screenWidth: 0,
    isMobile: false,
    cartAmount: 20,
  }),
  actions: {
    setHeaderHeight(scrollY) {
      this.scrollY = scrollY
      if (scrollY > 100) {
        this.height = 100
      }
      if (scrollY < 100 && document.documentElement.scrollWidth <= 1200) {
        this.height = 134
      }
      if (scrollY < 100 && document.documentElement.scrollWidth > 1200) {
        this.height = 180
      }
      if (document.documentElement.scrollWidth < 1024) {
        this.height = 172
      }
    },
    setLocalization(local) {
      this.localization = local
    },
    setIsMobile() {
      if (document.documentElement.scrollWidth < 1024) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    setScreenWidth() {
      this.screenWidth = document.documentElement.scrollWidth
    },
  },
})
