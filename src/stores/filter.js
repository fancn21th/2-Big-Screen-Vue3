import { defineStore } from "pinia";

/**
 *  all filter logic goes here
 **/
export const useFilterStore = defineStore({
  id: "filter",
  state: () => ({
    // categorized by module
    global: {
      year: 2021,
    },
    home: {
      category: "华中区域",
    },
    foo: {},
  }),
  getters: {
    getGlobalYear() {
      return this.global.year;
    },
    getHomeCategory() {
      return this.home.category;
    },
  },
  actions: {
    setGlobalYear(year) {
      this.global.year = year;
    },
    setHomeCategory(category) {
      this.home.category = category;
    },
  },
});
