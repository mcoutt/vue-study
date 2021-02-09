const app = Vue.createApp({
  data() {
    return {
      userColor: '',
      paragraphVisible: true,
      paragraphValue: 'visible',
      backgroundColor: ""
    };
  },
  computed: {
    boxASelected() {
      return {active: this.boxASelected}
    }
  },
  methods: {
    userColorSet(e) {
      if (this.paragraphVisible) {
        this.userColor = e.target.value
      }
    },
    showParagraph() {
      this.paragraphVisible = !this.paragraphVisible
      if (this.paragraphVisible) {
        this.paragraphValue = "visible"
      } else if (!this.paragraphVisible) {
        this.paragraphValue = "hidden"
      }
    },
    setBack(e) {
      this.backgroundColor = { "background-color": e.target.value }
    }
  }
});

app.mount('#assignment');
