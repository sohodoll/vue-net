<template>
  <div class="home">Home</div>
  <!-- <p>{{ ninjaOne.name }} and {{ ninjaOne.age }}</p>
  <button @click="handleClick">test</button>
  <button @click="age++">add age</button>
  <button @click="updateNinjaOne">Update Ninja</button>
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} is {{ ninjaTwo.age }}</p>
  <p>{{ nameTwo }}</p>
  <button @click="updateNinjaTwo">Add age</button> -->
  <input type="text" v-model="search" />
  <p>term: {{ search }}</p>
  <div v-for="name in matchingNames" key="name">{{ name }}</div>
  <button @click="stopWatching">Stop</button>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // const name = ref('mario')
    // const age = ref(30)
    // const p = ref(null)

    // const handleClick = () => {
    //   p.value.classList.toggle('test')
    //   name.value = 'luigi'
    // }

    // return {
    //   name,
    //   age,
    //   handleClick,
    //   p,
    // }

    // const ninjaOne = ref({ name: 'mario', age: 30 })
    // const ninjaTwo = reactive({ name: 'Josh', age: 20 }) //no primitives in reactive
    // let nameTwo = reactive('mario')

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40
    // }

    // const updateNinjaTwo = () => {
    //   ninjaTwo.age++
    //   nameTwo = 'Lari'
    // }

    // return {
    //   ninjaOne,
    //   ninjaTwo,
    //   nameTwo,
    //   updateNinjaOne,
    //   updateNinjaTwo,
    // }

    //used computed values to return filtered data
    const name = computed(() => {
      return 'shaun'
    })

    const search = ref('')
    const names = ref(['mario', 'lari', 'jack', 'browser', 'milk'])

    const stopWatchEffect = watchEffect(() => {
      console.log('watch effect running', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const stopWatching = () => {
      stopWatchEffect()
    }

    return {
      names,
      search,
      matchingNames,
      stopWatching,
    }
  },
}
</script>

<style>
.test {
  color: red;
}
</style>
