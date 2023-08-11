<template>
  <div class="home">Home</div>
  <p ref="p">{{ name }} and {{ age }}</p>
  <button @click="handleClick">test</button>
  <button @click="age++">add age</button>
  <input type="text" v-model="name" />
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const name = ref('mario')
    const age = ref(30)
    const p = ref(null)

    const handleClick = () => {
      p.value.classList.toggle('test')
      name.value = 'luigi'
    }

    return {
      name,
      age,
      handleClick,
      p,
    }
  },
}
</script>

<style>
.test {
  color: red;
}
</style>
