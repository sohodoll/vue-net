<template>
  <div>Details</div>
  <div v-if="error">THere is an error: {{ error }}</div>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
<script>
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return {
      post,
      error,
    }
  },
}
</script>
<style></style>
