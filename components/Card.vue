<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content" v-html="description" />
      <div v-if="speaker" class="media">
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
            {{ speaker }}
          </p>
          <p class="subtitle is-6" v-html="bio" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: false,
      default () { return '' }
    },
    bio: {
      type: String,
      required: false,
      default () { return '' }
    }
  }
}
</script>
