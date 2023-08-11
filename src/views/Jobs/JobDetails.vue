<template lang="">
  <div v-if="job">
    <h1>Job Details</h1>
    <p>Job is: {{ job.id }}</p>
    <p>{{ job.title }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <h1>Job Details</h1>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
    }
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((e) => console.log(e))
  },
}
</script>
<style lang=""></style>
