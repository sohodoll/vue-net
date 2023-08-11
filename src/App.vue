<script setup>
import { ref } from 'vue'
import SingUpForm from './components/SignUpForm.vue'

const data = ref('Hello World!')
</script>

<template>
  <SingUpForm />
</template>

<style>
body {
  background-color: rgba(95, 158, 160, 0.068);
}

#app {
  display: flex;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
