<template>
  <div>
    <h1>Home</h1>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="togglePosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button>
    <div v-if="error">There is an error: {{ error }}</div>
  </div>
</template>
<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const showPosts = ref(true)
    const togglePosts = () => {
      showPosts.value = !showPosts.value
    }

    const { posts, error, load } = getPosts()

    load()

    return { posts, showPosts, togglePosts, error, load }
  },
}
</script>
<style></style>
