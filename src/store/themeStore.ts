import { defineStore } from 'pinia'

type IGet = 'light' | 'dark'

const themeStore = defineStore('themeStore', {
  state: () => ({ get: 'light' as IGet }),
  actions: {
    set(e: IGet) {
      this.get = e
    },
  },
})

export default themeStore
