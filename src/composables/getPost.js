import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts/' + id)

      if (!data.ok) {
        throw new Error('something wrong with the single post')
      }

      post.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {
    post,
    error,
    load,
  }
}

export default getPost
