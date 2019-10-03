<template>
  <section class="section">
    <Card :session="session" :speaker="speaker" />
  </section>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  computed: {
    speaker () {
      return this.$store.state.speakers.filter(s => s.id === this.session.speaker)[0]
    }
  },
  async asyncData ({ params }) {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/session/${params.slug}`)
      return { session: data }
    } catch (err) {
      return { session: {} }
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getSpeakers')
  }
}
</script>
