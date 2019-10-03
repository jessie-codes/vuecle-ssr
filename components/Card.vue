<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ session.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content" v-html="session.description" />
      <div v-if="speaker.name" class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <b-icon
              icon="face"
              size="is-large"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ speaker.name }}
          </p>
          <p class="subtitle is-6" v-html="speaker.bio" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    session: {
      type: Object,
      default () { return {} }
    },
    speaker: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>
