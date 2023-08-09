const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3',
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(event, data) {
      console.log(event)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
})

app.mount('#app')
