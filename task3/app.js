const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    watchedNum() {
      if (this.counter < 37) {
        return ("Not there yet");
      } else if (this.counter > 37) {
        return ("Too much!");
      }
    }
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5
    },
    addOne() {
      this.counter = this.counter + 1
    }
  },
});

app.mount('#assignment');
