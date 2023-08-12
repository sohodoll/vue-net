<template>
  <div>
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>
<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: 'Post Title One',
        body: 'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
      },
      {
        title: 'Post Title Two',
        body: 'lorem lorem',
      },
    ])

    return { posts }
  },
}
</script>
<style></style>
