<template>
  <section class="section">
    <Card :title="title" :description="description" :author="author" :bio="bio" />
  </section>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  async asyncData ({ params }) {
    const base = {
      title: 'Session Not Found',
      description: 'Session Not Found',
      author: '',
      bio: ''
    }
    try {
      const { data } = await axios.get(`http://localhost:3000/api/session/${params.slug}`)
      return Object.assign({}, base, data)
    } catch (err) {
      return base
    }
  }
}
</script>
