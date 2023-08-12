<template>
  <div class="post-list">
    <div v-for="post in posts" key="post.title">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
import SinglePost from '../components/SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onUnmounted(() => {
      console.log('unmounted')
    })
  },
}
</script>
<style></style>
