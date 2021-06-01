import { defineStore } from "pinia"
import { pinia } from "../main"

export const userStore = defineStore({
  id: "user",
  state: () => ({
    name: "Boy",
  }),
  getters: {},
  actions: {},
})

export function userStoreHook() {
  return userStore(pinia)
}