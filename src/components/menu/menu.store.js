import { defineStore } from 'pinia'
import {
  PeopleIcon,
  GamesIcon,
  ComputerIcon,
  PhoneIcon,
  NotebookIcon,
  AudioIcon,
  FireIcon,
  NewIcon,
  LightningIcon,
  ChestIcon,
  QuestIcon,
  OrcIcon,
  CatalogIcon,
} from '../icons'
import { markRaw } from 'vue'

export const useMenuStore = defineStore('menu-store', {
  state: () => ({
    mobileMenuIsOpen: false,
    activeTab: '',
    currentLevel: 0,
    currentPath: [],
    tabs: [
      {
        id: 'catalog',
        title: 'Каталог',
        icon: markRaw(CatalogIcon),
        sections: [
          {
            title: 'Смартфоны и гаджеты',
            icon: markRaw(PhoneIcon),
            sections: [
              {
                title: 'Смартфоны',
                sections: [
                  { title: 'Apple iPhone', quantity: '123', link: '/' },
                  {
                    title: 'Смартфоны',
                    quantity: '63',
                    sections: [
                      { title: 'Apple iPhone', quantity: '123', link: '/' },
                      { title: 'Apple iPhone', quantity: '123', link: '/' },
                      { title: 'Apple iPhone', quantity: '123', link: '/' },
                      { title: 'Apple iPhone', quantity: '123', link: '/' },
                    ],
                  },
                  { title: 'IPhone', quantity: '120', link: '/' },
                  { title: 'Складные', quantity: '120', link: '/' },
                  { title: 'realme', quantity: '120', link: '/' },
                  { title: 'Huawei Mate X6', quantity: '100', link: '/' },
                  { title: 'Кнопочные', quantity: '23', link: '/' },
                  { title: 'Домашние', quantity: '17', link: '/' },
                  { title: 'Samsung', quantity: '27', link: '/' },
                ],
              },
              {
                title: 'Гаджеты',
                sections: [
                  { title: 'Смарт-часы', quantity: '15', link: '/' },
                  { title: 'Смарт-кольца', quantity: '34', link: '/' },
                  { title: 'Наушники', quantity: '21', link: '/' },
                  { title: 'Гарнитуры', quantity: '12', link: '/' },
                  { title: 'Портативное аудио', quantity: '42', link: '/' },
                  { title: 'Умные гаджеты', quantity: '46', link: '/' },
                  { title: 'Очки VR', quantity: '49', link: '/' },
                  { title: 'Для блогеров', quantity: '32', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Ноутбуки и компьютеры',
            icon: markRaw(NotebookIcon),
            sections: [
              {
                title: 'Ноутбуки',
                sections: [
                  { title: 'Apple iPhone', quantity: '123', link: '/' },
                  { title: 'Смартфоны', quantity: '63', link: '/' },
                  { title: 'IPhone', quantity: '120', link: '/' },
                  { title: 'Складыне', quantity: '120', link: '/' },
                  { title: 'realme', quantity: '120', link: '/' },
                  { title: 'Huawei Mate X6', quantity: '100', link: '/' },
                  { title: 'Кнопочные', quantity: '23', link: '/' },
                  { title: 'Домашние', quantity: '17', link: '/' },
                  { title: 'Samsung', quantity: '27', link: '/' },
                ],
              },
              {
                title: 'Компьютеры',
                sections: [
                  { title: 'Смарт-часы', quantity: '15', link: '/' },
                  { title: 'Смарт-кольца', quantity: '34', link: '/' },
                  { title: 'Наушники', quantity: '21', link: '/' },
                  { title: 'Гарнитуры', quantity: '12', link: '/' },
                  { title: 'Портативное аудио', quantity: '42', link: '/' },
                  { title: 'Умные гаджеты', quantity: '46', link: '/' },
                  { title: 'Очки VR', quantity: '49', link: '/' },
                  { title: 'Для блогеров', quantity: '32', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Телевизоры и цифровое ТВ',
            icon: markRaw(AudioIcon),
            sections: [
              {
                title: 'Телевизоры',
                sections: [
                  { title: 'Apple iPhone', quantity: '123', link: '/' },
                  { title: 'Смартфоны', quantity: '63', link: '/' },
                  { title: 'IPhone', quantity: '120', link: '/' },
                  { title: 'Складыне', quantity: '120', link: '/' },
                  { title: 'realme', quantity: '120', link: '/' },
                  { title: 'Huawei Mate X6', quantity: '100', link: '/' },
                  { title: 'Кнопочные', quantity: '23', link: '/' },
                  { title: 'Домашние', quantity: '17', link: '/' },
                  { title: 'Samsung', quantity: '27', link: '/' },
                ],
              },
              {
                title: 'Цифровое ТВ',
                sections: [
                  { title: 'Смарт-часы', quantity: '15', link: '/' },
                  { title: 'Смарт-кольца', quantity: '34', link: '/' },
                  { title: 'Наушники', quantity: '21', link: '/' },
                  { title: 'Гарнитуры', quantity: '12', link: '/' },
                  { title: 'Портативное аудио', quantity: '42', link: '/' },
                  { title: 'Умные гаджеты', quantity: '46', link: '/' },
                  { title: 'Очки VR', quantity: '49', link: '/' },
                  { title: 'Для блогеров', quantity: '32', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Аудиотехника',
            icon: markRaw(PhoneIcon),
            sections: [
              {
                title: 'Аудиотехника',
                sections: [
                  { title: 'Apple iPhone', quantity: '123', link: '/' },
                  { title: 'Смартфоны', quantity: '63', link: '/' },
                  { title: 'IPhone', quantity: '120', link: '/' },
                  { title: 'Складыне', quantity: '120', link: '/' },
                  { title: 'realme', quantity: '120', link: '/' },
                  { title: 'Huawei Mate X6', quantity: '100', link: '/' },
                  { title: 'Кнопочные', quantity: '23', link: '/' },
                  { title: 'Домашние', quantity: '17', link: '/' },
                  { title: 'Samsung', quantity: '27', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Акции',
            icon: markRaw(FireIcon),
            sections: [],
            link: '/',
          },
          {
            title: 'Новинки',
            icon: markRaw(NewIcon),
            sections: [],
            link: '/',
          },
        ],
      },
      {
        id: 'sales',
        title: 'Акции',
        icon: markRaw(FireIcon),
        link: '/',
        sections: [],
      },
      {
        id: 'hots',
        title: 'Горячее предложение',
        icon: markRaw(LightningIcon),
        link: '/',
        sections: [],
      },
      {
        id: 'gifts',
        title: 'Подарочные наборы',
        icon: markRaw(ChestIcon),
        sections: [
          {
            title: 'Кому',
            icon: markRaw(PeopleIcon),
            sections: [
              {
                title: 'Кому',
                sections: [
                  { title: 'Для мужчин', quantity: '123', link: '/' },
                  { title: 'Для женщин', quantity: '63', link: '/' },
                  { title: 'Папе', quantity: '120', link: '/' },
                  { title: 'Сотрудникам', quantity: '103', link: '/' },
                  { title: 'Мужу', quantity: '120', link: '/' },
                  { title: 'Корпоративный', quantity: '100', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Повод',
            icon: markRaw(GamesIcon),
            sections: [
              {
                title: 'Повод',
                sections: [
                  { title: 'День рождения', quantity: '123', link: '/' },
                  { title: 'Свадьба', quantity: '63', link: '/' },
                  { title: 'Новый год', quantity: '120', link: '/' },
                ],
              },
            ],
          },
          {
            title: 'Наполнение',
            icon: markRaw(ComputerIcon),
            sections: [
              {
                title: 'Наполнение',
                sections: [
                  { title: 'Смартфоны', quantity: '123', link: '/' },
                  { title: 'Ноутбуки', quantity: '63', link: '/' },
                  { title: 'Телевизоры', quantity: '120', link: '/' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'События',
        icon: markRaw(QuestIcon),
        sections: [
          { title: 'ИгроМИР', link: '/' },
          { title: 'Мероприятия', link: '/' },
          { title: 'Мастер-классы', link: '/' },
        ],
      },
      {
        id: 'brands',
        title: 'Наши бренды',
        icon: markRaw(OrcIcon),
        sections: [
          { title: 'Бренд 1', link: '/' },
          { title: 'Бренд 2', link: '/' },
          { title: 'Бренд 3', link: '/' },
        ],
      },
    ],
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab
    },
    setIsOpen(value) {
      this.mobileMenuIsOpen = value
    },
    navigateToLevel(level, title) {
      this.currentLevel = level

      if (level === 0) {
        this.currentPath = []
      } else {
        this.currentPath = this.currentPath.slice(0, level - 1)
        this.currentPath.push(title)
      }
    },
  },

  getters: {
    activeContent: (state) => {
      const tab = state.tabs.find((t) => t.id === state.activeTab)
      return tab ? tab.sections : null
    },

    getCurrentItems() {
      let items = this.tabs

      for (let i = 0; i < this.currentPath.length; i++) {
        const currentTitle = this.currentPath[i]
        const found = items.find((item) => item.title === currentTitle)

        if (!found) return []
        items = found.sections || []
      }

      if (items.length === 1 && items[0].sections?.length > 0) return items[0].sections
      return items
    },
  },
})
