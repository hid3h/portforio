<template>
  <div>
    <h1>{{ archive.fields.title }}</h1>
    <div v-html="$md.render(archive.fields.body)"></div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  async asyncData({ env, params }) {
    const entryId = params.id
    const archive = await client.getEntry(entryId);
    return {
      archive: archive
    }
  }
}
</script>

<style>
</style>
