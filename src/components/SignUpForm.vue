<template lang="">
  <form @submit.prevent="handleSubmit" @keydown.enter="$event.preventDefault()">
    <label>Name: </label>
    <input v-model="name" type="text" />

    <label>Email: </label>
    <input v-model="email" type="email" />

    <label>Password: </label>
    <input v-model="password" type="password" />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <div class="terms">
      <input v-model="terms" type="checkbox" required />
      <label>I agree to the terms and conditions</label>
    </div>

    <!-- <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>

    <div>
      <input type="checkbox" value="mario" v-model="names" />
      <label>Mario</label>
    </div>

    <div>
      <input type="checkbox" value="mayor" v-model="names" />
      <label>Mayor</label>
    </div> -->

    <label>Skills</label>
    <input v-model="tempSkill" @keyup="addSkill" />
    <div class="pill" v-for="skill in skills" key="skill" @click="deleteSkill(skill)">
      {{ skill }}
    </div>
    <button class="submit">Create an Account</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      role: null,
      terms: false,
      tempSkill: null,
      skills: new Set(),
      passwordError: null,
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === 'Enter' && this.tempSkill !== ',') {
        this.skills.add(this.tempSkill.trim())
        this.tempSkill = null
      }
    },
    deleteSkill(skill) {
      this.skills.delete(skill)
    },
    handleSubmit() {
      this.passwordError = this.password.length > 5 ? null : 'Password too short (5)'
      if (this.terms && !this.passwordError) {
        const user = {
          email: this.email,
          password: this.password,
          name: this.name,
          role: this.role,
          skills: [...this.skills],
        }
        console.log(user)
      }
    },
  },
}
</script>
<style>
form {
  min-width: 420px;
  max-width: 620px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  margin: 0 auto;
  display: block;
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
