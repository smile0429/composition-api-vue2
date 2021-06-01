<template>
  <div id="app">
    <h2>Hello {{ user.name }}</h2>
  </div>
</template>

<script>
import { ref, defineComponent } from "@vue/composition-api"
import { userStoreHook } from "@/stores/user"
import { getInfo } from "@/api/test"

export default defineComponent({
  name: "Home",
  components: {},
  mounted() {
    getInfo().then(res => {
      console.log('%cres===>>>: ', 'color: MidnightBlue; background: Aquamarine; font-size: 20px;', res)
      console.log("this.$config.title", this.$config.title)
    }).catch(err => { console.log(err) })
  },
  setup() {
    const user = userStoreHook()
    return {
      user,
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>