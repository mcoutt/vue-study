const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      repeatedName: ''
    };
  },
  methods: {
    showAlert() {
      alert('alarm')
    },
    register(e) {
      this.name = e.target.value
    },
    repeatName(e) {
      this.repeatedName = e.target.value
    },
  },
});

app.mount('#assignment');
