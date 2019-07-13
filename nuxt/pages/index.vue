<template>
  <div>
    <div v-for="archive in archives" :key="archive.fields.id">
      {{ archive.fields.title }}
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {},
  async asyncData({ env }) {
    const archives = await client.getEntries({
      content_type: env.ctfArchivesTypeId,
      order: '-sys.createdAt'
    })
    return {
      archives: archives.items
    }
  }
}
</script>

<style>
</style>
