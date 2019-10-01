<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          Nuxt.js Example
        </p>
        <Logo />
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.hero-body .container {
  margin: auto;
}
</style>
