const bind = (events, fn, context) => {
  events.forEach(v => {
    if (typeof v === "string") {
      if (typeof context[v] === "function") {
        fn(v, context[v])
      }
    } else if (typeof v === "object") {
      for (let i in v) {
        if (typeof i === "string") {
          if (typeof context[v[i]] === "function") {
            fn(i, context[v[i]])
          }
        }
      }
    }
  })
}

export default {
  methods: {
    _EventBusCall(type = "on") {
      if (type === "on" && this._bindEventBus) {
        return
      }
      if (type === "off" && !this._bindEventBus) {
        return
      }
      const events = this.$options.eventBus
      if (events && events.length) {
        this._bindEventBus = type === "on"
        bind(
          events,
          (event, fn) => {
            if (type === "on") {
              this.$bus.$off(event).$on(event, fn)
            } else {
              this.$bus.$off(event)
            }
          },
          this
        )
      }
    }
  },
  created() {
    this._EventBusCall("on")
  },
  beforeDestroy() {
    this._EventBusCall("off")
  },
  destroyed() {
    this._EventBusCall("off")
  },
  activated() {
    this._EventBusCall("on")
  },
  deactivated() {
    this._EventBusCall("off")
  }
}
