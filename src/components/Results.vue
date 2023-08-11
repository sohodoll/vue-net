<template lang="">
  <p>Reaction time: {{ score }}ms</p>
  <p class="rank">Your rank is {{ rank }}</p>
</template>
<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja'
    } else if (this.score < 500) {
      this.rank = 'Samurai'
    } else if (this.score < 1000) {
      this.rank = 'Warrior'
    } else {
      this.rank = 'Beginner'
    }
  },
}
</script>
<style>
.rank {
  font-size: 2em;
  color: #0faf87;
  font-weight: bold;
}
</style>
