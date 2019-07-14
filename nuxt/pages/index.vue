<template>
  <div>
    <blog-list :prop-archives="archives" />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import BlogList from '~/components/organisms/BlogList'

const client = createClient()

export default {
  components: {
    BlogList
  },
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
